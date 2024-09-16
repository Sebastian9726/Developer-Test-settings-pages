import { Injectable } from '@angular/core';

import {INote} from "./note-item/note-item.interface";


@Injectable({
    providedIn: 'root'
})
export class NotesService {
    private storageKey = 'notesData';
    notes: INote[] = [];

    constructor() {
        this.loadNotes(); 
    }

    loadNotes() {
        const storedNotes = localStorage.getItem(this.storageKey);
        if (storedNotes) {
            this.notes = JSON.parse(storedNotes);
        }
    }

    saveNotes() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.notes));
    }

    getNotes(): INote[] {
        return this.notes
    }

    saveNote(note: INote) {
        const index = this.notes.findIndex(n => n.id === note.id);
        if (index > -1) {
            this.notes[index] = note;
        } else {
            this.notes.push(note);
        }
        this.saveNotes();
    }

    deleteNote(noteId: number) {
        this.notes = this.notes.filter(note => note.id !== noteId);
        this.saveNotes();
    }

    updateNoteOrder(id: number, orderedNotes: INote[]) {
        const otherNotes = this.notes.filter(note => note.id !== id);
        this.notes = [...otherNotes, ...orderedNotes];
        this.saveNotes(); 
    }
}
