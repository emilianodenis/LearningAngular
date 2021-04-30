import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public confirmExit(): boolean {
        return confirm("are you sure you want to exit settings management?");
    }

}
