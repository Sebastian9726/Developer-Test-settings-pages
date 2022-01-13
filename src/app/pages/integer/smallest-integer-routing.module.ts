import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FullWidthComponent} from '../../layouts/full-width/full-width.component';
import {SmallestIntegerComponent} from './smallest-integer.component';

const fullWidthRoutes = [
  {
    path: '',
    component: SmallestIntegerComponent
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
export class SmallestIntegerRoutingModule {
}
