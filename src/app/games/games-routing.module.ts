import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/games/home/home.component';
import { MinesweeperComponent } from 'src/app/games/minesweeper/minesweeper.component';
import { TaquinComponent } from 'src/app/games/taquin/taquin.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "minesweeper",
                component: MinesweeperComponent,
            },
            {
                path: "taquin",
                component: TaquinComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class GamesRoutingModule {

}
