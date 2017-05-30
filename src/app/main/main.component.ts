import { Component, OnInit } from '@angular/core';
import { UntilityService } from '../core/services/untility.service';
import { SystemConstants } from '../core/common/system.constants';
import { UrlConstants } from '../core/common/url.constants';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _untilityService: UntilityService) { }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this._untilityService.navigate(UrlConstants.LOGIN);
  }
}
