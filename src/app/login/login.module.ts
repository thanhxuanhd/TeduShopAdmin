import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenService } from '../core/services/authen.service';
import { NotificationService } from '../core/services/notification.service';
import { LoginComponent } from './login.component';
import { loginRouters } from './login.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginRouters)
  ],
  providers: [AuthenService, NotificationService],
  declarations: [LoginComponent]
})
export class LoginModule { }
