import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { productCategoryRouter } from './product-category.router';
import { ProductCategoryComponent } from './product-category.component';
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
    RouterModule.forChild(productCategoryRouter),
    TreeModule,
    ModalModule.forRoot(),
    MdCheckboxModule
  ],
  providers: [DataService, NotificationService],
  declarations: [ProductCategoryComponent]
})
export class ProductCategoryModule { }
