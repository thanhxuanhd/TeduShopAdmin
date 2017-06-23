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
  constructor(
   ) { }

  ngOnInit() {
    $.getScript('../assets/js/material-dashboard.js');
    $.material.init();

  }
}
