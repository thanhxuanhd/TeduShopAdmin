import { Routes } from '@angular/router';

import { FunctionComponent } from './function.component';

export const functionRouter: Routes = [
     { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'index', component: FunctionComponent
    }
];