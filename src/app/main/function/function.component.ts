import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  public listFunctions: any[];
  public pageIndex: number = 1;
  public pageSize: number = 20;
  public pageDisplay: number = 10;
  public filter: string = '';
  public totalRow: number;
  public productCategoryId: any;

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let url = '/api/function/getall?&filter=' + this.filter;
    this._dataservice.get(url)
      .subscribe((response: any) => {
        this.listFunctions = response;
      }, error => {

      });
  }
  pageChanged(event: any) {
    this.loadData();
  }

}
