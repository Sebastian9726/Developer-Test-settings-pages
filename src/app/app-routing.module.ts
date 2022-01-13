import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'taskboard',
    loadChildren: () => import('./pages/taskboard/taskboard.module').then(m => m.TaskboardModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./pages/temperature/temperature.module').then(m => m.TemperatureModule)
  },
  {
    path: 'integer',
    loadChildren: () => import('./pages/integer/smallest-integer.module').then(m => m.SmallestIntegerModule)
  },
  {
    path: 'ghpages',
    loadChildren: () => import('./pages/ghpages/ghpages.module').then(m => m.GhpagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
