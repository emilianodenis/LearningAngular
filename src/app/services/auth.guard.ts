import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthStore } from "src/app/services/auth.store";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authStore: AuthStore,
        private router: Router,
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.authStore
            .isLoggedin$
            .pipe(
                map(isLoggedIn => isLoggedIn ? true : this.router.parseUrl('/login')),
            );
    }

}