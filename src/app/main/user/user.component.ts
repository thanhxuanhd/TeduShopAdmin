import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('addEditModal') public addEditModal: ModalDirective;
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

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let url = 'api/appUser/getlistpaging?categoryId=' + this.productCategoryId + '&page=' +
      this.pageIndex + '&pageSize=' + this.pageSize + '&keyword=' + this.keyword;
    this._dataservice.get(url)
      .subscribe((response: any) => {
        this.listUsers = response.Items;
        this.totalRow = response.TotalRows;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
      }, error => {

      });
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
}
