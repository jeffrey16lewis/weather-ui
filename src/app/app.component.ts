import { Component } from '@angular/core';
import {WeatherServiceService} from "./weather-service.service";
import {ConsolidatedWeather} from "./consolidated-weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = 'Weather App';
  weatherLocation: any;
  consolidatedWeatherList: ConsolidatedWeather[] = [];
  title: string = '';
  city: string = ''


  constructor(private service: WeatherServiceService) {}



  submit(): void {
    this.service.getWeatherCity(this.city).subscribe(resp => {
      this.weatherLocation = resp
    });
    this.city = '';
  }

  getInfo(woeId: string) {
    this.service.getWeather(woeId).subscribe(res => {
      this.title = res.title;
      this.consolidatedWeatherList = res.consolidated_weather;
    })
  }
}
