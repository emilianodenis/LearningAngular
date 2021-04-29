import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'taquin',
    templateUrl: './taquin.component.html',
    styleUrls: ['./taquin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaquinComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
