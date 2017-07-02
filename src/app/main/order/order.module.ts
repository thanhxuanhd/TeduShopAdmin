import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { orderRouter } from './order-routers';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(orderRouter)
  ],
  declarations: [OrderComponent, OrderAddComponent, OrderDetailComponent]
})
export class OrderModule { }
