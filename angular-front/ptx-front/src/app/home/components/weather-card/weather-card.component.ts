import { Component } from '@angular/core';
import { WeatherClassEnum } from 'src/app/shared/models/weather-class.enum';
import { WeatherClassService } from 'src/app/shared/services/weather-class.service';

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
      "IconPhrase": "Rain",
      "IsDaylight": true,
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=18&unit=c&lang=en-us",
      "PrecipitationIntensity": "Light",
      "PrecipitationProbability": 66.0,
      "PrecipitationType": "Rain",
      "Temperature": {
        "Unit": "C",
        "UnitType": 17,
        "Value": 19.4
      },
      "WeatherIcon": 13
    },
    {
      "DateTime": "2023-08-07T19:00:00-04:00",
      "IconPhrase": "Cloudy",
      "IsDaylight": true,
      "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=19&unit=c&lang=en-us",
      "PrecipitationProbability": 49.0,
      "Temperature": {
        "Unit": "C",
        "UnitType": 17,
        "Value": 18.9
      },
      "WeatherIcon": 7
    }
  ];

  mockWeatherCurrent = {
    "HasPrecipitation": "True",
    "IsDayTime": "True",
    "Link": "http://www.accuweather.com/en/ca/montreal/h3a/current-weather/56186?lang=en-us",
    "LocalObservationDateTime": "2023-08-07T15:38:00-04:00",
    "PrecipitationType": "Rain",
    "Temperature": {
      "Imperial": {
        "Unit": "F",
        "UnitType": 18,
        "Value": 70.0
      },
      "Metric": {
        "Unit": "C",
        "UnitType": 17,
        "Value": 21.1
      }
    },
    "WeatherIcon": "12",
    "WeatherText": "Light rain"
  }

  constructor(private weatherClass: WeatherClassService) { }

  getWeatherImageName(weatherCode?: number) {
    return weatherCode ? this.weatherClass.getClassification(weatherCode) : WeatherClassEnum.sunny
  }
}
