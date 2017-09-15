import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { orderRouter } from './order-routers';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenService } from '../../core/services/authen.service';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { UploadService } from '../../core/services/upload.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(orderRouter),
    PaginationModule.forRoot(),
    Daterangepicker,
    ModalModule.forRoot()
  ],
  providers: [UploadService, AuthenService, DataService, NotificationService],
  declarations: [OrderComponent, OrderAddComponent, OrderDetailComponent]
})
export class OrderModule { }
