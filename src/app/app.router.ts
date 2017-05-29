import { Routes } from '@angular/router';
import { LoginModule } from './login/login.module'

export const appRouters: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'main', loadChildren: './main/main.module#MainModule' }
// tslint:disable-next-line:eofline
];