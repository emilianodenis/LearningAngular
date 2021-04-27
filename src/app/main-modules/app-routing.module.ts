import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { LoginComponent } from 'src/app/login/login.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

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
        path: "login",
        component: LoginComponent,
    },
    {
        path: "about",
        component: AboutComponent,
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
