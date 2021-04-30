import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

    public isDrawerOpened: boolean = false;

    public get timeParam(): {} {
        return {
            time: new Date().getSeconds(),
        };
    }

    constructor() { }

    ngOnInit(): void {
    }

}
