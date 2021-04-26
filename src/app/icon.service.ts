import { Injectable, SecurityContext } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

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
        let basePath = "/assets/icons/";
        let extension = ".svg";

        icons.forEach(icon => {
            this.registry.addSvgIcon(
                icon,
                this.sanitizer.bypassSecurityTrustResourceUrl(`${basePath}${icon}${extension}`),
            )
        });

        // this.registry.addSvgIcon(
        //     "account_circle",
        //     this.sanitizer.bypassSecurityTrustResourceUrl("account_circle.svg"));
    }
}