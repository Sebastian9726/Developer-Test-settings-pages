import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-item',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FormsModule],
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.scss'
})
export class NoteItemComponent {

  faTrash = faTrash; 
  faEdit = faEdit; 
  @Input() note: any;
  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

}
