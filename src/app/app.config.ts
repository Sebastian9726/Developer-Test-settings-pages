import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {DragulaModule} from "ng2-dragula";
import {AppService} from "./app.service";
import { GeolocationService } from './services/geolacation/geolocation.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        importProvidersFrom(
            HttpClientModule, 
            DragulaModule.forRoot(),
            AppService,
        )
    ]
};
