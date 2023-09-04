import { Component } from '@angular/core';
import { WeatherClassEnum } from 'src/app/shared/models/weather-class.enum';
import { WeatherClassService } from 'src/app/shared/services/weather-class.service';
import { environment } from 'src/environments/environment';
import { WeatherService } from '../../services/weather/weather.service';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

  // TODO: option to change city
  
  mockWeatherHourly = [
    {
      "DateTime": "2023-08-07T18:00:00-04:00",
      "WeatherText": "Rain",
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=18&unit=c&lang=en-us",
      "PrecipitationIntensity": "Light",
      "PrecipitationProbability": 66.0,
      "PrecipitationType": "Rain",
      "Temperature": 19.4,
      "WeatherIcon": 13
    },
    {
      "DateTime": "2023-08-07T19:00:00-04:00",
      "WeatherText": "Cloudy",
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=19&unit=c&lang=en-us",
      "PrecipitationProbability": 49.0,
      "Temperature": 18.9,
      "WeatherIcon": 7
    }
  ];

  mockWeatherCurrent = {
    "HasPrecipitation": true,
    "Link": "http://www.accuweather.com/en/ca/montreal/h3a/current-weather/56186?lang=en-us",
    "DateTime": "2023-08-07T15:38:00-04:00",
    "PrecipitationType": "Rain",
    "Temperature": 28.6,
    "WeatherIcon": "12",
    "WeatherText": "Light rain"
  }

  cityKey = environment.defaultCityKey;
  currentWeather: Weather;

  constructor(private weatherClass: WeatherClassService, private weatherSvc: WeatherService) {
    this.getCurrentWeather()
   }

  getWeatherImageName(weatherCode?: number) {
    return weatherCode ? this.weatherClass.getClassification(weatherCode) : WeatherClassEnum.sunny;
  }

  getCurrentWeather() {
    this.weatherSvc.getCurrentWeather(this.cityKey).subscribe((res: Weather) => {
      this.currentWeather = res;
    })
  }
}
