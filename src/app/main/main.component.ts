import { Component, OnInit } from '@angular/core';
import { UntilityService } from '../core/services/untility.service';
import { SystemConstants } from '../core/common/system.constants';
import { UrlConstants } from '../core/common/url.constants';
import { AuthenService } from '../core/services/authen.service';
import { LoggedInUser } from '../core/domain/loginin.user';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: LoggedInUser;
  constructor(
    private _untilityService: UntilityService,
    private authenService: AuthenService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this._untilityService.navigate(UrlConstants.LOGIN);
  }
}
