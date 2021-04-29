import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { GameService } from "src/app/games/services/game.service";
import { GameStat } from "src/app/model/game-stat";

@Injectable()
export class GameResolver implements Resolve<GameStat[]>  {

    constructor(private gamesService: GameService) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GameStat[]> {
        return this.gamesService.getGameStats();
    }


}
