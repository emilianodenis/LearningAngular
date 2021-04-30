import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SettingsComponent } from "src/app/settings/settings.component";

@Injectable()
export class ConfirmExitGuard implements CanDeactivate<SettingsComponent>{

    canDeactivate(component: SettingsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.confirmExit();
    }

}