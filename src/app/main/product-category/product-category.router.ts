import { Routes } from '@angular/router';

import { ProductCategoryComponent } from './product-category.component';

export const productCategoryRouter: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: 'index', component: ProductCategoryComponent
    }
];