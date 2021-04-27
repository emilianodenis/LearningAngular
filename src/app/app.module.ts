
import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/app/about/about.component';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AngularModule } from 'src/app/main-modules/angular.module';
import { AppRoutingModule } from 'src/app/main-modules/app-routing.module';
import { MaterialModule } from 'src/app/main-modules/material.module';
import { AuthService } from 'src/app/services/auth.service';
import { IconService } from 'src/app/services/icon.service';
import { RouterService } from 'src/app/services/router.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AboutComponent
    ],
    imports: [
        AngularModule,
        MaterialModule,
        AppRoutingModule,
    ],
    providers: [
        AuthService,
        IconService,
        RouterService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
