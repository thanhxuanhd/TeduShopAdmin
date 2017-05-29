import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { mainRouter } from './main.router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRouter)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
