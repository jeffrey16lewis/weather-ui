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


  constructor(private service: WeatherServiceService) {}



  submit(data:any): void {
    console.log(data.city)
    this.service.getWeatherCity(data.city).subscribe(resp => {
      this.weatherLocation = resp
    })
  }

  getInfo(woeId: string) {
    console.log(woeId);
    this.service.getWeather(woeId).subscribe(res => {
      this.title = res.title;
      this.consolidatedWeatherList = res.consolidated_weather;
    })
  }
}
