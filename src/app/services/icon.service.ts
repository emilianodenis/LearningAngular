import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

const iconBasePath: string =  "/assets/icons/";
const iconBaseExtension: string =  ".svg";

const icons: string[] = [
    "account_circle",
    "exit_to_app",
    "help"
];

@Injectable()
export class IconService{
    constructor(
        private registry: MatIconRegistry,
        private sanitizer: DomSanitizer,
    ) {
        
    }

    public loadIcons(): void {
        icons.forEach(icon => {
            this.registry.addSvgIcon(
                icon,
                this.sanitizer.bypassSecurityTrustResourceUrl(`${iconBasePath}${icon}${iconBaseExtension}`),
            )
        });
    }
}