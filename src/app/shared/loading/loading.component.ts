import { Component, Input, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/operators';
import { DisposableSubscriptions } from 'src/app/model/disposable-subscriptions';
import { LoadingService } from 'src/app/shared/loading.service';

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent extends DisposableSubscriptions implements OnInit {

    @Input()
    routing: boolean = false;

    @Input()
    detectRoutingOngoing = false;

    public get isLoading$(): Observable<boolean> {
        return this.loadingService.loading$;
    }

    constructor(
        public loadingService: LoadingService,
        private router: Router
    ) {
        super();
    }

    ngOnInit(): void {
        if (this.detectRoutingOngoing) {
            this.addSingleLivingSubscription("nav start",
                this.router
                    .events
                    .pipe(
                        filter(evt => evt instanceof NavigationStart || evt instanceof RouteConfigLoadStart),
                    )
                    .subscribe(() => this.loadingService.loadingOn())
            );
            this.addSingleLivingSubscription("nav end",
                this.router
                    .events
                    .pipe(
                        filter(evt => evt instanceof NavigationEnd ||
                            evt instanceof NavigationError ||
                            evt instanceof NavigationCancel ||
                            evt instanceof RouteConfigLoadEnd)
                    )
                    .subscribe(() => this.loadingService.loadingOff())
            );
        }
    }

    ngOnDestroy(): void {
        this.dispose();
    }

}
