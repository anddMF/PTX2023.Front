import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

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
      "WeatherIcon": 18
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

  constructor() {

  }

  roundNumber(number: number) {
    return Math.round(number);
  }
}
