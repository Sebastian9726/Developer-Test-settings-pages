import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSave, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-modal',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FormsModule],
  templateUrl: './note-modal.component.html',
  styleUrl: './note-modal.component.scss'
})
export class NoteModalComponent {


  @Input() showModal: boolean = false;
  @Input() editMode: boolean = false;
  @Input() comment: string = '';
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveNote = new EventEmitter<string>();
  @Output() editNote = new EventEmitter<string>();


  faSave = faSave;
  faPlus = faPlus;
  faTimes = faTimes;

  onClose() {
    this.closeModal.emit();
    this.comment = '';
  }

  onSave() {
    
    this.saveNote.emit(this.comment);
    this.comment = '';
  }

  onEdit() {
    this.editNote.emit(this.comment);
    this.comment = '';
  }

}
