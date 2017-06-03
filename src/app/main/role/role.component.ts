import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
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
  public totalRow:number;
  public roles: any[];
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let url = 'api/appRole/getlistpaging?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&filter=' + this.filter;
    this._dataservice.get(url)
      .subscribe((response: any) => {
         this.roles = response.Items;
         this.totalRow = response.TotalRows;
         this.pageIndex = response.PageIndex;
         this.pageSize = response.PageSize;
      }, error => {

      });
  }
 pageChanged(event: any){
   this.pageIndex = event.page;
   this.loadData();
 }
}
