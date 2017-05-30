import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import {productCategoryRouter} from './product-category.router';
import { ProductCategoryComponent } from './product-category.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productCategoryRouter)
  ],
  declarations: [ProductCategoryComponent]
})
export class ProductCategoryModule { }
