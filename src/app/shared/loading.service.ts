import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class LoadingService {

    private loading = new BehaviorSubject<boolean>(false);

    private _loading$: Observable<boolean> = this.loading.asObservable();
    public get loading$(): Observable<boolean> {
        return this._loading$;
    }

    constructor(

    ) { 

    }

    public loadingOn(): void {
        this.loading.next(true);

    }

    public loadingOff(): void {
        this.loading.next(false);
    }
}
