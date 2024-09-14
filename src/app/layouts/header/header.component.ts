import {Component, WritableSignal} from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppService} from "../../app.service";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule, 
        FontAwesomeModule,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    faGithub = faGithub;
    menuOpen = false; 
    currentTemperature: WritableSignal<string | null>; // Aceptar null como posible valor

    constructor(public appService: AppService) {
        this.currentTemperature = appService.currentTemperature;
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen; // Alternar el estado del menú
    }

}
