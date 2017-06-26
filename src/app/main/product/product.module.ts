import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productRouter } from './product.router';
import { ProductComponent } from './product.component';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MdSelectModule, MdCheckboxModule } from '@angular/material';
import { Daterangepicker } from 'ng2-daterangepicker';
import { UploadService } from '../../core/services/upload.service';
import { SimpleTinyComponent } from '../../shared/simpletiny/simpletiny.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(productRouter),
    MdSelectModule,
    MdCheckboxModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [DataService, NotificationService, UploadService],
  declarations: [ProductComponent, SimpleTinyComponent]
})
export class ProductModule { }
