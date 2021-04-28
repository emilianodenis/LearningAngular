import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameStat } from 'src/app/model/game-stat';

@Component({
    selector: 'app-score-board',
    templateUrl: './score-board.component.html',
    styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

    public stats: GameStat[] = [];

    constructor(
        private route: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.stats = this.route.snapshot.data["stats"];
    }

    ngAfterViewInit(): void {
        console.log(this.stats);
    }

}
