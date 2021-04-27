import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';


// import {AuthStore} from '../services/auth.store';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private routerService: RouterService,
    ) {

        this.form = this.fb.group({
            email: ['test@angular-university.io', [Validators.required]],
            password: ['test', [Validators.required]]
        });

    }

    ngOnInit() {

    }

    login() {

        if (!this.form.valid)
            return;

        const val = this.form.value;

        this.auth.login(val.email, val.password)
            .subscribe(
                res => {
                    if (res){
                        this.routerService.navigateToGames();
                    }
                },
                err => {
                    alert("Login failed!");
                }
            );



    }

}