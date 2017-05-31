import { Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './core/guards/auth.guard';

export const appRouters: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'main', loadChildren: './main/main.module#MainModule', canActivate: [AuthGuard] },
// tslint:disable-next-line:eofline
];