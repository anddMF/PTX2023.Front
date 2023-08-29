import { Injectable } from '@angular/core';
import { WeatherClassEnum } from '../models/weather-class.enum';

@Injectable({
  providedIn: 'root'
})
export class WeatherClassService {

  constructor() { }

  getClassification(weatherCode: number) {
    switch (weatherCode) {
      case 1: case 30:
        return WeatherClassEnum.sunny;

      case 2:
        return WeatherClassEnum.mostlysunny;

      case 3: case 4:
        return WeatherClassEnum.partlysunny;

      case 7: case 8: case 38: case 5: case 6:
        return WeatherClassEnum.cloudy;

      case 11:
        return WeatherClassEnum.fog;

      case 12:
        return WeatherClassEnum.showersday;

      case 13: case 14:
        return WeatherClassEnum.sunnyshowers;

      case 15: case 16: case 17:
        return WeatherClassEnum.tstormday;

      case 18:
        return WeatherClassEnum.rainday;

      case 19: case 20: case 21: case 43:
        return WeatherClassEnum.flurriesday;

      case 22: case 23: case 29: case 31: case 44:
        return WeatherClassEnum.snow;

      case 24: case 25: case 26:
        return WeatherClassEnum.freezingrain;

      case 32:
        return WeatherClassEnum.windy;

      case 33:
        return WeatherClassEnum.clear;

      case 34:
        return WeatherClassEnum.mostlyclear;

      case 35: case 36: case 37:
        return WeatherClassEnum.partlyclear;

      case 39: case 40:
        return WeatherClassEnum.showersnight;

      case 41: case 42:
        return WeatherClassEnum.tstormnight;

      default: {
        return WeatherClassEnum.sunny
      }
    }
  }
}
