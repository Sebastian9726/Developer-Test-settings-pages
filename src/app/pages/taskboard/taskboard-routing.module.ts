import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FullWidthComponent} from '../../layouts/full-width/full-width.component';
import {BoardComponent} from './board/board.component';

const fullWidthRoutes = [
  {
    path: '',
    component: BoardComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: FullWidthComponent,
    children: fullWidthRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskboardRoutingModule {
}
