import {Component} from '@angular/core';
import {NotesService} from "./notes.service";

@Component({
    selector: 'app-notes',
    standalone: true,
    imports: [],
    providers: [NotesService],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.scss'
})
export class NotesComponent {
    constructor(private notesService: NotesService) {}
}
