import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SimpleListComponent} from './simple-list/simple-list.component';
import { SimpleListItemComponent } from './simple-list-item/simple-list-item.component';

@NgModule({
  declarations: [
    SimpleListComponent,
    SimpleListItemComponent
  ],
  exports: [
    SimpleListComponent,
    SimpleListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SimpleListModule { }
