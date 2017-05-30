import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { loginRouters } from './login.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRouters)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
