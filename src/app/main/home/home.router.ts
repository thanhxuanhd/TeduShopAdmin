import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRouter: Routes = [
     { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'index', component: HomeComponent
    }
];