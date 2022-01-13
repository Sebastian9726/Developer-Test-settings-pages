import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragulaModule} from 'ng2-dragula';
import {TaskboardRoutingModule} from './taskboard-routing.module';
import {BoardComponent} from './board/board.component';
import {BoardItemComponent} from './board-item/board-item.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent
  ],
  imports: [
    CommonModule,
    DragulaModule,
    TaskboardRoutingModule
  ]
})
export class TaskboardModule {
}
