import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/services/auth.service';
import { IconService } from 'src/app/services/icon.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

    public title: string = 'LearningAngular';

    public get isLoggedin$(): Observable<boolean> {
        return this.authService.isLoggedin$;
    }

    constructor(
        private iconService: IconService, //Must be injected to load svg icons
        private routerService: RouterService,
        private authService: AuthService,
    ) {

    }

    ngOnInit() {
    }

    public logout(): void {
        this.authService.logout();
        this.routerService.navigateToLogin();
    }
    
}
