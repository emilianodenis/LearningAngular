import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class RouterService {

    constructor(
        private router: Router,
    ) {

    }

    public navigateToLogin(): void {
        this.router.navigateByUrl("/login");
    }

    public navigateToAbout(): void {
        this.router.navigateByUrl("/about");
    }

    public navigateToGames(): void {
        this.router.navigateByUrl("/games");
    }
}