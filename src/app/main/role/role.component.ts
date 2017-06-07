import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { MessageContstants } from '../../core/common/message.constants';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string = '';
  public totalRow: number;
  public roles: any[];
  public modalTitle: string = '';
  public modalButton: string = '';
  public modalButtonIcon: string = '';
  public entity: any;

  @ViewChild('addEditForm') public addEditForm: NgForm;

  @ViewChild('addEditModal') public addEditModal: ModalDirective;
  constructor(
    private _dataService: DataService,
    private _notificationService: NotificationService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let url = 'api/appRole/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter;
    this._dataService.get(url)
      .subscribe((response: any) => {
        this.roles = response.Items;
        this.totalRow = response.TotalRows;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
      }, error => {

      });
  }
  loadRole(roleId: any) {
    this._dataService.get('/api/appRole/detail/' + roleId).subscribe((response: any) => {
      this.entity = response;
    }, error => {
      this._dataService.handleError(error);
    });

  }
  pageChanged(event: any) {
    this.pageIndex = event.page;
    this.loadData();
  }
  showModalCreate() {
    this.modalTitle = "Tạo mới quyền";
    this.modalButton = "Thêm mới";
    this.modalButtonIcon = "save";
    this.entity = {};
    this.addEditModal.show();
  }

  showModalEdit(roleId) {
    this.modalTitle = "Chỉnh sửa quyền";
    this.modalButton = "Cập nhật";
    this.modalButtonIcon = "mode_edit";
    this.loadRole(roleId);
    this.addEditModal.show();
  }
  showModalDelete(roeId) {

  }
  saveChange(isvalidForm) {
    if (isvalidForm) {
      if (this.entity.Id == undefined) {
        this._dataService.post('api/appRole/add', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.loadData();
            this.addEditModal.hide();
            this.addEditForm.resetForm();
            this._notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
          }, error => {
            this._dataService.handleError(error);
          });
      } else {
        this._dataService.put('/api/appRole/update', JSON.stringify(this.entity))
          .subscribe((response: any) => {
            this.loadData();
            this.addEditModal.hide();
            this.addEditForm.resetForm();
            this._notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
          }, error => this._dataService.handleError(error));
      }
    }
  }
  deleteItem(id: any) {
    this._notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => this.deleteItemConfirm(id));
  }
  deleteItemConfirm(id: any) {
    this._dataService.delete('/api/appRole/delete', 'id', id).subscribe((response: Response) => {
      this._notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
      this.loadData();
    });
  }
}
