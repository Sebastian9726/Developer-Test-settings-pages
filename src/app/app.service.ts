import {Injectable, signal} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    currentTemperature = signal('32º');
}
