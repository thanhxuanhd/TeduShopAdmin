import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { mainRouter } from './main.router';
import { UtilityService } from '../core/services/utility.service';
import { AuthenService } from '../core/services/authen.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRouter),
  ],
  providers: [UtilityService, AuthenService],
  declarations: [MainComponent]
})
export class MainModule { }
