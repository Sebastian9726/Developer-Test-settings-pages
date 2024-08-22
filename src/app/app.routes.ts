import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FullWidthComponent} from "./layouts/full-width/full-width.component";
import {TemperatureComponent} from "./pages/temperature/temperature.component";
import {TaskboardComponent} from "./pages/taskboard/taskboard.component";
import {NotesComponent} from "./pages/notes/notes.component";
import {SmallestIntegerComponent} from "./pages/smallest-integer/smallest-integer.component";
import {GhpagesComponent} from "./pages/ghpages/ghpages.component";

export const routes: Routes = [
    {
        path: '',
        component: FullWidthComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'temperature',
                component: TemperatureComponent
            },
            {
                path: 'taskboard',
                component: TaskboardComponent
            },
            {
                path: 'notes',
                component: NotesComponent
            },
            {
                path: 'integer',
                component: SmallestIntegerComponent
            },
            {
                path: 'ghpages',
                component: GhpagesComponent
            }
        ]
    },
];
