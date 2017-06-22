import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { MessageContstants } from '../core/common/message.constants';
import { UrlConstants } from '../core/common/url.constants';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  constructor(
    private _authenService: AuthenService,
    private _notificationService: NotificationService,
    private _router: Router) { }

  ngOnInit() {
    $.getScript('../assets/js/material-dashboard.js');
  }

  login() {
    this.loading = true;
    this._authenService.login(this.model.username, this.model.password)
      .subscribe(
      success => {
        this._router.navigate([UrlConstants.HOME]);
      }, error => {
        this._notificationService.printErrorMessage(MessageContstants.LOGIN_AGAIN_MSG);
        this.loading = false;
      });
  }
}
