import { Injectable } from '@angular/core';
import { WeatherClassEnum } from '../models/weather-class.enum';

@Injectable({
  providedIn: 'root'
})
export class WeatherClassService {

  constructor() { }

  getClassification(weatherCode: number) {
    switch (weatherCode) {
      case 1 || 30:
        return WeatherClassEnum.sunny;

      case 2:
        return WeatherClassEnum.mostlysunny;

      case 3 || 4:
        return WeatherClassEnum.partlysunny;

      case 5 || 6:
        return WeatherClassEnum.mostlysunny;

      case 7 || 8 || 38:
        return WeatherClassEnum.cloudy;

      case 11:
        return WeatherClassEnum.fog;

      case 12:
        return WeatherClassEnum.showersday;

      case 13 || 14:
        return WeatherClassEnum.sunnyshowers;

      case 15 || 16 || 17:
        return WeatherClassEnum.tstormday;

      case 18:
        return WeatherClassEnum.rainday;

      case 19 || 20 || 21 || 43:
        return WeatherClassEnum.flurriesday;

      case 22 || 23 || 29 || 31 || 44:
        return WeatherClassEnum.snow;

      case 24 || 25 || 26:
        return WeatherClassEnum.freezingrain;

      case 32:
        return WeatherClassEnum.windy;

      case 33:
        return WeatherClassEnum.clear;

      case 34:
        return WeatherClassEnum.mostlyclear;

      case 35 || 36 || 37:
        return WeatherClassEnum.partlyclear;

      case 39 || 40:
        return WeatherClassEnum.showersnight;

      case 41 || 42:
        return WeatherClassEnum.tstormnight;

      default: {
        return WeatherClassEnum.sunny
      }
    }
  }
}
