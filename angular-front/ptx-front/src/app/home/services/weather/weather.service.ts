import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // TODO: db with city keys and names because API doesnt provide it
  constructor(private http: HttpClient) { }

  getCityKey(query: string){

  }

  getCurrent(cityKey: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('citykey', cityKey);

    return this.http.get<Weather>(environment.apiBaseUrl + '/weather/current', {params: queryParams})
  }

  getHourly(cityKey: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('citykey', cityKey);

    return this.http.get<Weather[]>(environment.apiBaseUrl + '/weather/hourly', {params: queryParams})
  }
}
