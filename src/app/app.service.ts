import { Injectable, signal } from '@angular/core';
import { WeatherService } from './services/weather/weather.service';
import { GeolocationService } from './services/geolacation/geolocation.service';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  currentTemperature = signal<string | null>(null); // Inicializar como null
  loadingTemperature = signal<boolean>(true); // Para controlar el estado de carga

  constructor(
    private locationService: GeolocationService,
    private weatherService: WeatherService
  ) { }

  fetchWeatherData() {
    this.locationService.getCurrentPosition()
      .then(position => {
        const { latitude, longitude } = position;
        this.weatherService.getWeather(latitude, longitude).subscribe({
          next: (data) => {
            const roundedTemp = Math.round(data.main.temp);
            this.currentTemperature.set(`${roundedTemp}`);
            this.loadingTemperature.set(false); // Indicar que la carga ha terminado
          },
          error: (error) => {
            alert('Error fetching weather data:' + error);
          },
          complete: () => {
           
          }
        });
      })
      .catch(error => {
        alert('Error getting location:'+ error);
      });
  }
}