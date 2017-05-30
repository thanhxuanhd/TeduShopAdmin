import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { mainRouter } from './main.router';
import { UntilityService } from '../core/services/untility.service';
import { AuthenService } from '../core/services/authen.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRouter)
  ],
  providers: [UntilityService, AuthenService],
  declarations: [MainComponent]
})
export class MainModule { }
