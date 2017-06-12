import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../core/services/utility.service';
import { SystemConstants } from '../core/common/system.constants';
import { UrlConstants } from '../core/common/url.constants';
import { AuthenService } from '../core/services/authen.service';
import { LoggedInUser } from '../core/domain/loginin.user';
declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: LoggedInUser;
  constructor(
    private _untilityService: UtilityService,
    private authenService: AuthenService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    $.getScript('../assets/js/material.min.js');
    $.getScript('../assets/js/material-dashboard.js');
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this._untilityService.navigate(UrlConstants.LOGIN);
  }
}
