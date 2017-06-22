import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { functionRouter } from './funtion.router';
import { FunctionComponent } from './function.component';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TreeModule } from 'angular-tree-component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MdCheckboxModule } from '@angular/material'
@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    MdCheckboxModule,
    TreeModule,
    RouterModule.forChild(functionRouter)
  ],
  providers: [DataService, NotificationService],
  declarations: [FunctionComponent]
})
export class FunctionModule { }
