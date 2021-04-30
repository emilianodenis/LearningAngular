import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { LoadingService } from 'src/app/shared/loading.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public get isAppLoading$(): Observable<boolean> {
        return this.loading.loading$;
    }

    private isValidating: boolean = false;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private routerService: RouterService,
        private loading: LoadingService,
    ) {

        this.form = this.fb.group({
            email: ['test@test.io', [Validators.required]],
            password: ['test', [Validators.required]]
        });

    }

    ngOnInit() {

    }

    login() {
        if (this.isValidating)
            return;

        this.isValidating = true;

        if (!this.form.valid)
            return;

        const val = this.form.value;

        this.loading.loadingOn();

        this.auth
            .login(val.email, val.password)
            .pipe(
                finalize(() => this.isValidating = false),
            )
            .subscribe(
                res => {
                    this.loading.loadingOff();
                    if (res) {
                        this.routerService.navigateToGames();
                    }
                },
                err => {
                    this.loading.loadingOff();
                    alert("Login failed!");
                }
            );
    }
}