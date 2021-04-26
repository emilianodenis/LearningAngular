
import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/app/about/about.component';
import { AppRoutingModule } from 'src/app/shared-modules/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { IconService } from 'src/app/icon.service';
import { LoginComponent } from 'src/app/login/login.component';
import { AngularModule } from 'src/app/shared-modules/angular.module';
import { MaterialModule } from 'src/app/shared-modules/material.module';

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
        IconService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
