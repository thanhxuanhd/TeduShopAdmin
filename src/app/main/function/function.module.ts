import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { functionRouter } from './funtion.router';
import { FunctionComponent } from './function.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(functionRouter)
  ],
  declarations: [FunctionComponent]
})
export class FunctionModule { }
