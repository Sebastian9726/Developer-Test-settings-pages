import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {DragulaModule} from "ng2-dragula";
import {AppService} from "./app.service";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        importProvidersFrom(
            DragulaModule.forRoot(),
            AppService
        )
    ]
};
