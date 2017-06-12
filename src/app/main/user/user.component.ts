import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../core/services/notification.service';
import { UploadService } from '../../core/services/upload.service';
import { SystemConstants } from '../../core/common/system.constants';
import { MessageContstants } from '../../core/common/message.constants';
import * as moment from 'moment';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;
  @ViewChild('avatar') avatar;
  public myRoles: string[] = [];
  public listUsers: any[];
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public keyword: string = '';
  public totalRow: number;
  public productCategoryId: any;
  public modalTitle: string = '';
  public modalButton: string = '';
  public modalButtonIcon: string = '';
  public entity: any;
  public allRoles: any[];
  public baseFolder = SystemConstants.BASE_API;
  public dateOptions: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: false,
    singleDatePicker: true
  };
  constructor(private _dataService: DataService
    , private _notificationService: NotificationService,
    private _uploadService: UploadService) { }

  ngOnInit() {
    this.loadRoles();
    this.loadData();
  }

  loadData() {
    let url = 'api/appUser/getlistpaging?categoryId=' + this.productCategoryId + '&page=' +
      this.pageIndex + '&pageSize=' + this.pageSize + '&keyword=' + this.keyword;
    this._dataService.get(url)
      .subscribe((response: any) => {
        this.listUsers = response.Items;
        this.totalRow = response.TotalRows;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
      }, error => {

      });
  }
  loadRoles() {
    this._dataService.get('/api/appRole/getlistall').subscribe((response: any[]) => {
      this.allRoles = [];
      for (let role of response) {
        this.allRoles.push({ id: role.Name, name: role.Description });
      }
    }, error => this._dataService.handleError(error));
  }

  pageChanged(event: any) {
    this.loadData();
  }

  showModalCreate() {
    this.modalTitle = "Tạo mới quyền";
    this.modalButton = "Thêm mới";
    this.modalButtonIcon = "save";
    this.entity = {};
    this.addEditModal.show();
  }

  showModalEdit(userId) {
    this.modalTitle = "Chỉnh sửa quyền";
    this.modalButton = "Cập nhật";
    this.modalButtonIcon = "mode_edit";
    this.loadUserDetail(userId);
    this.addEditModal.show();
  }
  public selectGender(event) {
    this.entity.Gender = event.target.value
  }

  loadUserDetail(id: any) {
    this._dataService.get('/api/appUser/detail/' + id)
      .subscribe((response: any) => {
        this.entity = response;
        console.log(this.entity);
        for (let role of this.entity.Roles) {
          this.myRoles.push(role);
        }
        if (this.entity.BirthDay) {
          var date = new Date(this.entity.BirthDay);
          this.entity.BirthDay = moment(this.entity.BirthDay, 'MM/DD/YYYY').format('DD/MM/YYYY');
        }
      });
  }
  saveChange(valid) {
    if (valid) {
      this.entity.Roles = this.myRoles;
      let fi = this.avatar.nativeElement;
      if (fi.files.length > 0) {
        this._uploadService.postWithFile('/api/upload/saveImage', null, fi.files)
          .then((imageUrl: string) => {
            this.entity.Avatar = imageUrl;
          }).then(() => {
            this.saveData();
          });
      }
      else {
        this.saveData();
      }
    }
  }
  private saveData() {
    if (this.entity.Id == undefined) {
      console.log('Model', this.entity);
      debugger;
      this._dataService.post('/api/appUser/add', JSON.stringify(this.entity))
        .subscribe((response: any) => {
          this.loadData();
          this.addEditModal.hide();
          this._notificationService.printSuccessMessage(MessageContstants.CREATED_OK_MSG);
        }, error => this._dataService.handleError(error));
    }
    else {
      this._dataService.put('/api/appUser/update', JSON.stringify(this.entity))
        .subscribe((response: any) => {
          this.loadData();
          this.addEditModal.hide();
          this._notificationService.printSuccessMessage(MessageContstants.UPDATED_OK_MSG);
        }, error => this._dataService.handleError(error));
    }
  }

  dateSelected(event) {
    this.entity.BirthDay = moment(event.start).format('DD/MM/YYYY');
  }

  deleteItem(id: any) {
    this._notificationService.printConfirmationDialog(MessageContstants.CONFIRM_DELETE_MSG, () => this.deleteItemConfirm(id));
  }

  deleteItemConfirm(id: any) {
    this._dataService.delete('/api/appUser/delete', 'id', id).subscribe((response: Response) => {
      this._notificationService.printSuccessMessage(MessageContstants.DELETED_OK_MSG);
      this.loadData();
    });
  }
}
