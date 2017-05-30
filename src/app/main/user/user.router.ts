import { Routes } from '@angular/router';

import { UserComponent } from './user.component';

export const userRouter: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'index', component: UserComponent
    }

];