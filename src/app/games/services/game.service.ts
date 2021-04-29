import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { shareReplay } from "rxjs/internal/operators/shareReplay";
import { GameStat } from "src/app/model/game-stat";

@Injectable()
export class GameService {

    constructor(
        private http: HttpClient,
    ) {

    }

    public getGameStats(): Observable<GameStat[]> {
        return this.http.get<GameStat[]>("/api/gamestats/")
            .pipe(
                shareReplay()
            );
    }
}