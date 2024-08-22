import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-taskboard-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './taskboard-item.component.html',
  styleUrl: './taskboard-item.component.scss'
})
export class TaskboardItemComponent {
    @Input({ required: true }) theme!: string;
}
