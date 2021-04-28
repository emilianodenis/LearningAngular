import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, first } from "rxjs/operators";
import { GameStat } from "src/app/model/game-stat";

const stats = [
    <GameStat>{
        game: "taquin",
        bestTime: 25,
    },
    <GameStat>{
        game: "minesweeper",
        bestTime: 125,
    },
    <GameStat>{
        game: "scrabble",
        bestScore: 1432,
    },
    <GameStat>{
        game: "yum",
        bestScore: 38,
    },
];

@Injectable()
export class GameResolver implements Resolve<GameStat[]>  {

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GameStat[]> {
        return of(stats)
            .pipe(
                delay(1500),
                first(),
            )
    }


}
