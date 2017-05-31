import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SystemConstants } from '../../core/common/system.constants'
import { UrlConstants } from '../../core/common/url.constants';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {

    }

    canActivate(activateRoute: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) {
        if (localStorage.getItem(SystemConstants.CURRENT_USER)) {
            return true;
        }
        else {
            this.router.navigate([UrlConstants.LOGIN],{queryParams:{
                returnUrl: routerStateSnapshot.url
            }});
            return false;
        }
    }
}