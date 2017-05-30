import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { SystemConstants } from '../../core/common/system.constants';
import { AuthenService } from '../../core/services/authen.service';
import { NotificationService } from './notification.service';
import { UntilityService } from './untility.service';
import { MessageContstants } from './../common/message.constants';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {
  private header: Headers;
  constructor(private _http: Http,
    private _router: Router,
    private _authenService: AuthenService,
    private _notificationService: NotificationService,
    private _utilityService: UntilityService) { }
  get(url: string) {
    this.header.delete('Authorization');
    this.header.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.get(SystemConstants.BASE_API + url, { headers: this.header }).map(this.ExtraData);
  }
  post(url: string, data?: any) {
    this.header.delete('Authorization');
    this.header.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + url, data, { headers: this.header }).map(this.ExtraData);
  }
  put(url: string, data?: any) {
    this.header.delete('Authorization');
    this.header.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + url, data, { headers: this.header }).map(this.ExtraData);
  }
  delete(url: string, key: string, id: string) {
    this.header.delete('Authorization');
    this.header.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + url + '/?' + key + '=' + id, { headers: this.header }).map(this.ExtraData);
  }
  postFile(url: string, data?: any) {
    let newHeader: Headers;
    this.header.delete('Authorization');
    this.header.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + url, { headers: newHeader }).map(this.ExtraData);
  }

  private ExtraData(response: Response) {
    let body = response.json();
    return body || {};
  }

  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageContstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    }
    else {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Lỗi hệ thống';
      this._notificationService.printErrorMessage(errMsg);

      return Observable.throw(errMsg);
    }
  }
}