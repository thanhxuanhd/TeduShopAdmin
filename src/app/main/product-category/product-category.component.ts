import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  public productCategorys: any[];
  public pageIndex: number = 0;
  public pageSize: number =20;
  public pageDisplay: number = 10;
  public filter: string = '';
  public totalRow: number;
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    let url = '/api/productCategory/getall?page=' + this.pageIndex + '&pageSize=' + this.pageSize + '&keyword=' + this.filter;
    this._dataservice.get(url)
      .subscribe((response: any) => {
        this.productCategorys = response.Items;
        this.totalRow = response.TotalRows;
        this.pageIndex = response.PageIndex;
        this.pageSize = response.PageSize;
      }, error => {
      });
  }
  pageChanged(event: any) {
    this.pageIndex = event.page - 1;
    this.loadData();
  }

}
