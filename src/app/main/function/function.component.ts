import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { TreeComponent } from 'angular-tree-component';
import { NotificationService } from '../../core/services/notification.service';
import { MessageContstants } from '../../core/common/message.constants';
import { UtilityService } from '../../core/services/utility.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
declare var $: any;
@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css'],
})
export class FunctionComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;
  @ViewChild('permissionModal') public permissionModal: ModalDirective;
  @ViewChild(TreeComponent)
  private functionTree: TreeComponent;
  public _functionTree: any[];
  public functions: any;
  public entity: any;
  public editFlag: boolean;
  public filter: string = '';
  public modalTitle: string = '';
  public modalButton: string = '';
  public modalButtonIcon: string = '';
  public _permission: any[];
  public _functionId: any;
  constructor(private _dataService: DataService,
    private _notificationService: NotificationService,
    private _utilityService: UtilityService) { }

  ngOnInit() {
    this.searchData();
  }

  createFunction() {
    this.entity = {};
    this.modalTitle = "Thêm mới quyền";
    this.modalButton = "Thêm quyền";
    this.modalButtonIcon = "save";
    this.addEditModal.show();
  }

  searchData() {
    let url = '/api/function/getall?&filter=' + this.filter;
    this._dataService.get(url)
      .subscribe((response: any) => {
        this.functions = response.filter(x => x.ParentId == null);
        this._functionTree = this._utilityService.Unflatten(response);
      }, error => {

      });
  }
  editFunction(functionId) {
    this.modalTitle = "Chỉnh sửa quyền";
    this.modalButton = "Cập nhật";
    this.modalButtonIcon = "mode_edit";
    this._dataService.get('/api/function/detail/' + functionId).subscribe((response: any) => {
      this.entity = response;
      this.editFlag = true;
      this.addEditModal.show();
    }, error => this._dataService.handleError(error));
  }

  deleteItemFunction(id: any) {
    this._notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => this.deleteFunction(id));
  }
  deleteFunction(functuinId) {
    this._dataService.delete('/api/function/delete', 'id', functuinId).subscribe((response: any) => {
      this._notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
      this.searchData();
    }, error => this._dataService.handleError(error));
  }

  saveChange(valid) {
    if (valid) {
      if (this.editFlag == false) {
        this._dataService.post('/api/function/add', JSON.stringify(this.entity)).subscribe((response: any) => {
          this.searchData();
          this.addEditModal.hide();
          this._notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
        }, error => this._dataService.handleError(error));
      }
      else {
        this._dataService.put('/api/function/update', JSON.stringify(this.entity)).subscribe((response: any) => {
          this.searchData();
          this.addEditModal.hide();
          this._notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
        }, error => this._dataService.handleError(error));
      }
    }
  }
  showPermisstion(functionId) {
    $.material.init();
    this._dataService.get('/api/appRole/getAllPermission?functionId=' + functionId).subscribe((response: any[]) => {
      this._functionId = functionId;
      this._permission = response;
      this.permissionModal.show();
    }, error => this._dataService.handleError(error));
  }
}
