import { NgModule } from "@angular/core";
import { GamesRoutingModule } from "src/app/games/games-routing.module";
import { HomeComponent } from "src/app/games/home/home.component";
import { MinesweeperComponent } from "src/app/games/minesweeper/minesweeper.component";
import { TaquinComponent } from "src/app/games/taquin/taquin.component";
import { ScoreBoardComponent } from './score-board/score-board.component';

@NgModule({
    declarations: [
        HomeComponent,
        MinesweeperComponent,
        TaquinComponent,
        ScoreBoardComponent,
    ],
    imports: [
        GamesRoutingModule,
    ],
    providers: [
    ],
    bootstrap: [
    ],
})
export class GamesModule { }