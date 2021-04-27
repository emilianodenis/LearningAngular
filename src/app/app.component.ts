import { Component } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public title: string = 'LearningAngular';

    constructor(
        private iconService: IconService, //Must be injected to load svg icons
        private routerService: RouterService,
    ) {

    }

    public logout(): void {
        localStorage.removeItem("user");
        this.routerService.navigateToLogin();
    }
    
}
