import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherInfo} from "./weather-info";

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  public getWeatherCity(city: string) {
    return this.http.get<any>("http://localhost:8080/weather/"+city);
  }

  public getWeather(woeid: string) {
    return this.http.get<WeatherInfo>("http://localhost:8080/weather/info/"+woeid);
  }
}
