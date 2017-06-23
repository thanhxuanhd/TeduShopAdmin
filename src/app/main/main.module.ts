import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { mainRouter } from './main.router';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { TopmenuComponent } from '../shared/topmenu/topmenu.component';
import { DataService } from '../core/services/data.service';
import { NotificationService } from '../core/services/notification.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRouter),
  ],
  providers: [UtilityService, AuthenService, DataService,NotificationService],
  declarations: [MainComponent, SidebarComponent,
    TopmenuComponent]
})
export class MainModule { }
