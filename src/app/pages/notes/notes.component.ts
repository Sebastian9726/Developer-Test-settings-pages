import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotesService } from "./notes.service";
import { FilterPipe } from '../../pipe/filter.pipe';
import { faPlus, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NoteItemComponent } from './note-item/note-item.component';
import { INote } from './note-item/note-item.interface';
import { NoteModalComponent } from './note-modal/note-modal.component';

@Component({
    selector: 'app-notes',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        NoteItemComponent,
        FilterPipe,
        FontAwesomeModule,
        NoteModalComponent
    ],
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    faPlus = faPlus; // Icono de "más"
    faSave = faSave; // Icono de guardar
    faTimes = faTimes; // Icono de cerrar (X)
    notes: INote[] = []
    newNote: string = '';
    searchQuery: string = '';
    list = 'notes';
    nextId = 1;
    showModal = false;
    editMode = false;
    newTitle: string = '';
    newComment: string = '';
    noteToEdit: INote | null = null;
    activeListId: number | null = null;

    constructor(
        private notesService: NotesService
    ) { }

    ngOnInit(): void {
        this.getNotes()
    }

    openModal( note: INote | null = null) {
        this.showModal = true;
        
        if (note) {
            this.editMode = true;
            this.noteToEdit = note;
            this.newComment = note.comment;
        } else {
            this.editMode = false;
            this.newComment = '';
        }
    }

    closeModal() {
        this.showModal = false;
        this.newTitle = '';
        this.newComment = '';
        this.activeListId = null;
        this.noteToEdit = null;
        this.editMode = false;
    }

    saveNoteFromModal(comment: string) {
        if (comment.trim()) {
            const newNote: INote = {
                id: this.nextId++,            
                comment: comment.trim(),
            }
            this.notesService.saveNote(newNote);
            this.getNotes();
            this.closeModal();
        }
    }
    
    // Método para editar una tarea existente
    editNoteFromModal(comment: string) {
        if (this.editMode && this.noteToEdit) {
            this.noteToEdit.comment = comment.trim();
            this.notesService.saveNote(this.noteToEdit);
            this.getNotes();
            this.closeModal();
        }
    }

    deleteNote(note: INote) {
        this.notesService.deleteNote(note.id);
        this.notes = this.notes.filter(n => n.id !== note.id);
    }


    getNotes() {
        this.notes = this.notesService.getNotes();
    }

    updateNoteOrder(note: INote) {
        this.notesService.updateNoteOrder(note.id, this.notes);

    }
}
