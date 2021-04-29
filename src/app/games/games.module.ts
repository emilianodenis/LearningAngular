import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from "src/app/games/games-routing.module";
import { HomeComponent } from "src/app/games/home/home.component";
import { MinesweeperComponent } from "src/app/games/minesweeper/minesweeper.component";
import { ScoreBoardComponent } from "src/app/games/score-board/score-board.component";
import { GameService } from "src/app/games/services/game.service";
import { TaquinComponent } from "src/app/games/taquin/taquin.component";
import { MaterialModule } from "src/app/main-modules/material.module";

@NgModule({
    declarations: [
        HomeComponent,
        MinesweeperComponent,
        TaquinComponent,
        ScoreBoardComponent,
    ],
    imports: [
        CommonModule,
        GamesRoutingModule,
        MaterialModule,
    ],
    providers: [
        GameService,
    ],
    bootstrap: [
    ],
})
export class GamesModule { }