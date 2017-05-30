import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';

export const productRouter: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'index', component: ProductComponent
    }
];