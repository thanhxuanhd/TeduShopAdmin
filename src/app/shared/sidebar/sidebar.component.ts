import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../core/services/utility.service';
import { SystemConstants } from '../../core/common/system.constants';
import { UrlConstants } from '../../core/common/url.constants';
import { AuthenService } from '../../core/services/authen.service';
import { DataService } from '../../core/services/data.service';
import { LoggedInUser } from '../../core/domain/loginin.user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: LoggedInUser;
  public functions: any[];
  constructor(private _dataService:DataService) { }

  ngOnInit() {
     this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
     this._dataService.get('/api/function/getlisthierarchy').subscribe((response: any[]) => {
      this.functions = response.sort((n1, n2) => {
        if (n1.DisplayOrder > n2.DisplayOrder)
          return 1;
        else if (n1.DisplayOrder < n2.DisplayOrder)
          return -1;
        return 0;
      });
    }, error => this._dataService.handleError(error));
  }

}
