import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf, NgTemplateOutlet} from "@angular/common";
import {ISimpleListItem} from "./simple-list-item.interface";

@Component({
    selector: 'app-simple-list-item',
    standalone: true,
    imports: [
        RouterLink,
        NgIf,
        NgTemplateOutlet
    ],
    templateUrl: './simple-list-item.component.html',
    styleUrl: './simple-list-item.component.scss'
})
export class SimpleListItemComponent {
    @Input({required: true}) item!: ISimpleListItem;
}
