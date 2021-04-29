import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/main/about/about.component';
import { LoginComponent } from 'src/app/main/login/login.component';
import { PageNotFoundComponent } from 'src/app/main/page-not-found/page-not-found.component';
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
    },
    {
        //PageNotFound must be the last route!!!
        path: "**",
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}
