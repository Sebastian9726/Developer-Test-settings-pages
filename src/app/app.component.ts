import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { AppService } from './app.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,FontAwesomeModule],
    template: '<router-outlet />'
})
export class AppComponent implements OnInit,OnDestroy  {
    title = 'developer-test-2024';


    private weatherUpdateInterval: any; // Variable para almacenar el ID del intervalo
    private intervalo:number = 30000
    constructor(private appService:AppService ) { }

    ngOnInit(): void {
        var counter:any = 0
        this.updateWeather(); 
        this.weatherUpdateInterval = setInterval(() => {
            this.updateWeather();
        }, this.intervalo); 
    }

    ngOnDestroy(): void {
        if (this.weatherUpdateInterval) {
            clearInterval(this.weatherUpdateInterval);
        }
    }

    updateWeather() {
        this.appService.fetchWeatherData();
      }
}
