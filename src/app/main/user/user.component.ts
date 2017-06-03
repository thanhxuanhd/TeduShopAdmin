import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public listUsers: any[];
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public keyword: string = '';
  public totalRow: number;
  public productCategoryId: any;

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let url = 'api/appUser/getlistpaging?categoryId='+this.productCategoryId+'&page=' +
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

}
