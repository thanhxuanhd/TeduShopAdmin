import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { productRouter } from './product.router';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRouter)
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
