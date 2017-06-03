import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: any[];
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
    let url = 'api/product/getall?categoryId='+this.productCategoryId+'&page=' +
      this.pageIndex + '&pageSize=' + this.pageSize + '&keyword=' + this.keyword;
    this._dataservice.get(url)
      .subscribe((response: any) => {
        this.products = response.Items;
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
