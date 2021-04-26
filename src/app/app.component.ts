import { Component } from '@angular/core';
import { IconService } from 'src/app/icon.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public title: string = 'LearningAngular';

    constructor(
        private iconService: IconService,
    ) {
        this.iconService.loadIcons();
    }
    
}
