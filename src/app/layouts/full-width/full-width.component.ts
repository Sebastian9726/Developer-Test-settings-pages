import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-full-width',
  standalone: true,
  imports: [
      HeaderComponent,
      FooterComponent,
      RouterOutlet
  ],
  templateUrl: './full-width.component.html',
  styleUrl: './full-width.component.scss'
})
export class FullWidthComponent {

}
