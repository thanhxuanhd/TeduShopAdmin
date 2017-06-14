import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { TreeComponent } from 'angular-tree-component';
import { NotificationService } from '../../core/services/notification.service';
import { MessageContstants } from '../../core/common/message.constants';
import { UtilityService } from '../../core/services/utility.service';
@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {
  @ViewChild(TreeComponent)
  private functionTree: TreeComponent;
  public _functionTree: any[];
  public functions: any;
  public entity: any;
  public editFlag: boolean;
  public filter: string = '';

  constructor(private _dataservice: DataService,
    private _notificationService: NotificationService,
    private _utilityService: UtilityService) { }

  ngOnInit() {
    this.searchData();
  }
  searchData() {
    let url = '/api/function/getall?&filter=' + this.filter;
    this._dataservice.get(url)
      .subscribe((response: any) => {
        this.functions = response.filter(x => x.ParentId == null);
        this._functionTree = this._utilityService.Unflatten(response);
      }, error => {

      });
  }
  editFunction(functuinId){

  }

  deleteFunction(functuinId){

  }


}
