import { Component, Input, SimpleChanges } from '@angular/core';
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

  @Input() cityName: string = '';

  // TODO: option to change city

  hourlyWeatherList: Weather[] = [
    {
      "DateTime": new Date("2023-09-15T17:00:00-04:00"),
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=17&unit=c&lang=en-us",
      "PrecipitationProbability": 0.0,
      "Temperature": 20.1,
      "WeatherIcon": 2,
      "WeatherText": "Mostly sunny"
    },
    {
      "DateTime": new Date("2023-09-15T18:00:00-04:00"),
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=18&unit=c&lang=en-us",
      "PrecipitationProbability": 0.0,
      "Temperature": 18.8,
      "WeatherIcon": 2,
      "WeatherText": "Mostly sunny"
    },
    {
      "DateTime": new Date("2023-09-15T19:00:00-04:00"),
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=19&unit=c&lang=en-us",
      "PrecipitationProbability": 0.0,
      "Temperature": 17.6,
      "WeatherIcon": 2,
      "WeatherText": "Mostly sunny"
    },
    {
      "DateTime": new Date("2023-09-15T20:00:00-04:00"),
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=20&unit=c&lang=en-us",
      "PrecipitationProbability": 0.0,
      "Temperature": 16.9,
      "WeatherIcon": 35,
      "WeatherText": "Partly cloudy"
    },
    {
      "DateTime": new Date("2023-09-15T21:00:00-04:00"),
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=21&unit=c&lang=en-us",
      "PrecipitationProbability": 0.0,
      "Temperature": 16.6,
      "WeatherIcon": 35,
      "WeatherText": "Partly cloudy"
    }
  ];

  currentWeather: Weather = {
    "DateTime": new Date(),
    "HasPrecipitation": false,
    "Link": "http://www.accuweather.com/en/ca/montreal/h3a/current-weather/56186?lang=en-us",
    "Temperature": 21.5,
    "WeatherIcon": 1,
    "WeatherText": "Sunny"
  };

  cityKey = environment.defaultCityKey;

  constructor(private weatherClass: WeatherClassService, private weatherSvc: WeatherService) {
    if (!environment.localMode) {
      if (this.cityName) {
        this.getCityKey();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!environment.localMode) {
      if (changes['cityName'].currentValue && changes['cityName'].currentValue !== changes['cityName'].previousValue) {
        this.getCityKey();
      }
    }
  }

  getWeatherImageName(weatherCode?: number) {
    return weatherCode ? this.weatherClass.getClassification(weatherCode) : WeatherClassEnum.sunny;
  }

  getCurrentWeather() {
    this.weatherSvc.getCurrent(this.cityKey).subscribe((res: Weather) => {
      this.currentWeather = res;
    })
  }

  getHourlyWeather() {
    this.weatherSvc.getHourly(this.cityKey).subscribe((res: Weather[]) => {
      this.hourlyWeatherList = res;
    })
  }

  getCityKey() {
    this.weatherSvc.getCityKey(this.cityName).subscribe((res: any) => {
      this.cityKey = res[0].Key;
      this.getCurrentWeather();
      this.getHourlyWeather();
    })
  }
}
