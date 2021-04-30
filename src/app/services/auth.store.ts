import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { throwError } from "rxjs/internal/observable/throwError";
import { map, shareReplay, tap } from "rxjs/operators";
import { User } from "src/app/model/user";


const AUTH_DATA = "auth_data";

@Injectable()
export class AuthStore {

    private _isLoggedin$: Observable<boolean>;
    public get isLoggedin$(): Observable<boolean> {
        return this._isLoggedin$;
    }

    private user = new BehaviorSubject<User>(undefined);

    private _user$: Observable<User> = this.user.asObservable();
    public get user$(): Observable<User> {
        return this._user$;
    }

    constructor(
        private http: HttpClient,
    ) {
        this._isLoggedin$ = this.user$.pipe(map(user => !!user));
        this.checkExistingLogin()
    }

    private checkExistingLogin(): void {

        const loadedUser = localStorage.getItem(AUTH_DATA);

        if (loadedUser == undefined)
            return;

        const user = <User>JSON.parse(loadedUser);

        this.user.next(user);
    }

    public login(email: string, password: string): Observable<User> {
        if (!email || !password)
            return throwError("Invalid credentials");

        return this.http.post<User>("/api/login", { email, password })
            .pipe(
                tap(user => {
                    this.user.next(user);
                    localStorage.setItem(AUTH_DATA, JSON.stringify(user));
                }),
                shareReplay()
            );
    }

    public logout(): void {
        this.user.next(undefined);
        localStorage.removeItem(AUTH_DATA);
    }

}