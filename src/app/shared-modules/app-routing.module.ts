import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "about",
        component: AboutComponent,
    }
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
