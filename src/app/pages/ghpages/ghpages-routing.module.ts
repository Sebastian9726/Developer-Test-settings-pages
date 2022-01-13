import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FullWidthComponent} from '../../layouts/full-width/full-width.component';
import {GhpagesComponent} from './ghpages.component';

const fullWidthRoutes = [
  {
    path: '',
    component: GhpagesComponent
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
export class GhpagesRoutingModule {
}
