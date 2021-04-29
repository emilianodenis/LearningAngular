import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { throwError } from "rxjs/internal/observable/throwError";
import { User } from "src/app/model/user";

@Injectable()
export class AuthService {


    private isLoggedin = new BehaviorSubject<boolean>(false);

    private _isLoggedin$: Observable<boolean> = this.isLoggedin.asObservable();
    public get isLoggedin$(): Observable<boolean> {
        return this._isLoggedin$;
    }



    //public isLoggedin: boolean = false;

    constructor(

    ) {
        this.isLoggedin.next(this.checkExistingLogin());
    }

    private checkExistingLogin(): boolean {

        const loadedUser = localStorage.getItem("user");

        if (loadedUser == undefined)
            return false;

        const user = <User>JSON.parse(loadedUser);

        return !!user.username && !!user.password;
    }

    public login(username: string, password: string): Observable<boolean> {
        if (!username || !password)
            return throwError("Invalid credentials");

        if (username == "123" && password == "123")
            return throwError("Invalid credentials");

        let user = <User>{
            username,
            password,
        }

        localStorage.setItem("user", JSON.stringify(user));

        this.isLoggedin.next(true);

        return of(true);
    }

    public logout(): void {
        this.isLoggedin.next(false);
        localStorage.removeItem("user");
    }

}