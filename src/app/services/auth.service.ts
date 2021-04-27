import { Injectable } from "@angular/core";
// import { throwError } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { throwError } from "rxjs/internal/observable/throwError";

@Injectable()
export class AuthService {

    constructor(

    ) {

    }

    public login(username: string, password: string): Observable<boolean> {
        if (!username || !password)
            return throwError("Invalid credentials");

        if (username == "123" && password == "123")
            return throwError("Invalid credentials");

        let user = {
            username,
            password,
        }

        localStorage.setItem("user", JSON.stringify(user));

        return of(true);
    }

}