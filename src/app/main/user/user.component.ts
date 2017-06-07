import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NotificationService } from '../../core/services/notification.service';
import { MessageContstants } from '../../core/common/message.constants';
import * as moment from 'moment';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;
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
  public dateOptions: any = {
    locale: { format: 'DD/MM/YYYY' },
    alwaysShowCalendars: false,
    singleDatePicker: true
  };
  constructor(private _dataService: DataService
    , private _notificationService: NotificationService) { }

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
        for (let role of this.entity.Roles) {
          this.myRoles.push(role);
        }
        var date = new Date(this.entity.BirthDay);
        this.entity.BirthDay = moment('12-25-1995','DD/MM/YYYY').format('DD/MM/YYYY');

        console.log(this.entity.BirthDay);
      });
  }
  private saveData() {
    if (this.entity.Id == undefined) {
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
}
