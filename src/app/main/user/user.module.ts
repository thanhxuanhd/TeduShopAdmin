import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { userRouter } from './user.router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRouter)
  ],
  declarations: [UserComponent]
})
export class UserModule { }
