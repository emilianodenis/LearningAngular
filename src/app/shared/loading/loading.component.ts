import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { DisposableSubscriptions } from 'src/app/model/disposable-subscriptions';
import { LoadingService } from 'src/app/shared/loading.service';

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class LoadingComponent extends DisposableSubscriptions implements OnInit, OnDestroy {

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
            this.addSubscriptions(
                this.router
                    .events
                    .subscribe(evt => {
                        if (evt instanceof NavigationStart || evt instanceof RouteConfigLoadStart) {
                            this.loadingService.loadingOn();
                        } else if (evt instanceof NavigationEnd ||
                            evt instanceof NavigationError ||
                            evt instanceof NavigationCancel ||
                            evt instanceof RouteConfigLoadEnd) {
                            this.loadingService.loadingOff();
                        }
                    }),
            )
        }
    }

    ngOnDestroy(): void {
        this.dispose();
    }

}
