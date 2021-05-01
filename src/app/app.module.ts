
import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/app/main/about/about.component';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/main/login/login.component';
import { AngularModule } from 'src/app/main-modules/angular.module';
import { AppRoutingModule } from 'src/app/main-modules/app-routing.module';
import { MaterialModule } from 'src/app/main-modules/material.module';
import { PageNotFoundComponent } from 'src/app/main/page-not-found/page-not-found.component';
import { AuthStore } from 'src/app/services/auth.store';
import { IconService } from 'src/app/services/icon.service';
import { RouterService } from 'src/app/services/router.service';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { LoadingService } from 'src/app/shared/loading.service';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { ChatComponent } from 'src/app/main/chat/chat.component';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        ChatComponent,
        LoadingComponent,
        LoginComponent,
        PageNotFoundComponent,
        SettingsComponent,
    ],
    imports: [
        AngularModule,
        AppRoutingModule,
        MaterialModule,
    ],
    exports: [
    ],
    providers: [
        AuthStore,
        IconService,
        LoadingService,
        RouterService,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
