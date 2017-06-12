import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { userRouter } from './user.router';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { Daterangepicker } from 'ng2-daterangepicker';
import { UploadService } from '../../core/services/upload.service';
import { DateFormatsPipe } from '../../core/common/date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MultiselectDropdownModule,
    Daterangepicker,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(userRouter)
  ],
  providers: [DataService, NotificationService, UploadService],
  declarations: [UserComponent, DateFormatsPipe]
})
export class UserModule { }
