import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/games/home/home.component';
import { MinesweeperComponent } from 'src/app/games/minesweeper/minesweeper.component';
import { ScoreBoardComponent } from 'src/app/games/score-board/score-board.component';
import { GameResolver } from 'src/app/games/services/game.resolver';
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
            {
                path: "scoreboard",
                component: ScoreBoardComponent,
                resolve: {
                    stats: GameResolver,
                }
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
    providers: [
        GameResolver,
    ]
})
export class GamesRoutingModule {

}
