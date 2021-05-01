import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/main/about/about.component';
import { ChatComponent } from 'src/app/main/chat/chat.component';
import { LoginComponent } from 'src/app/main/login/login.component';
import { PageNotFoundComponent } from 'src/app/main/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { CanLoadAuthGuard } from 'src/app/services/can-load-auth.guard';
import { ConfirmExitGuard } from 'src/app/services/confirm-exit.guard';
import { CustomPreloadingStragegy } from 'src/app/services/custom-preloading.strategy';
import { SettingsComponent } from 'src/app/settings/settings.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "/games",
        pathMatch: "full",
    },
    {
        path: "games",
        loadChildren: () => import("../games/games.module").then(m => m.GamesModule),
        canLoad: [
            CanLoadAuthGuard,
        ],
        data: {
            preload: false,
        },
    },
    {
        path: "about",
        component: AboutComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "settings",
        component: SettingsComponent,
        canActivate: [
            AuthGuard,
        ],
        canActivateChild: [
            AuthGuard,
        ],
        canDeactivate: [
            ConfirmExitGuard,
        ],
    },
    {
        path: 'helpdesk-chat',
        component: ChatComponent,
        outlet: 'chat'
    },
    {
        //PageNotFound must be the last route!!!
        path: "**",
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                preloadingStrategy: CustomPreloadingStragegy,//NoPreloading,
            }
            ),
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        AuthGuard,
        CanLoadAuthGuard,
        ConfirmExitGuard,
        CustomPreloadingStragegy,
    ]
})
export class AppRoutingModule {

}
