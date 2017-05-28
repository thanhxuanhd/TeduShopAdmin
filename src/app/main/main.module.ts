import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { UserComponent } from './user/user.component';
import { FunctionComponent } from './function/function.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, HomeComponent, ProductComponent, ProductCategoryComponent, UserComponent, FunctionComponent, RoleComponent]
})
export class MainModule { }
