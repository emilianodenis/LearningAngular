import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameStat } from 'src/app/model/game-stat';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'score-board',
    templateUrl: './score-board.component.html',
    styleUrls: ['./score-board.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreBoardComponent implements OnInit {

    public stats$: Observable<GameStat[]> = undefined;

    constructor(
        private route: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.stats$ =
            this.route
                .data
                .pipe(
                    map(data => data["stats"]),
                );

        // this.route
        //     .queryParamMap
        //     .pipe(
        //         map(p => p["params"]),
        //     )
        //     .subscribe(
        //         p => console.log(p),
        //     );
    }
}
