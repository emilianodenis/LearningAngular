import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { AuthStore } from "src/app/services/auth.store";
import { RouterService } from "src/app/services/router.service";

@Injectable()
export class CanLoadAuthGuard implements CanLoad {


    constructor(
        private auth: AuthStore,
        private routerService: RouterService,
    ){

    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
        return this.auth
            .isLoggedin$
            .pipe(
                first(),
                tap(isLoggedIn => {
                    if (!isLoggedIn){
                        this.routerService.navigateToLogin();
                    }
                })
            )
    }

}