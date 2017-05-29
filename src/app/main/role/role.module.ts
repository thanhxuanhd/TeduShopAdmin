import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RoleComponent } from './role.component';
import { roleRouter } from './role.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(roleRouter)
  ],
  declarations: [RoleComponent]
})
export class RoleModule { }
