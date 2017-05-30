import { Routes } from '@angular/router';

import { RoleComponent } from './role.component';

export const roleRouter: Routes = [
     { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'index', component: RoleComponent
    }
];