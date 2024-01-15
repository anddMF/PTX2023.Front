import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Weather } from '../../models/weather.model';
import { City } from '../../models/city.model';
import { Observable } from 'rxjs';

export interface CityWallpaper {
  urls: CityWallpaperUrl;
  user: CityWallpaperUser;
}

export class CityWallpaperUrl {
  full: string;
  raw: string;
  regular: string;
}

export class CityWallpaperUser {
  name: string;
  twitter_username: string;
  portfolio_url: string;
  instagram_username: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // TODO: db with city keys and names because API doesnt provide it
  constructor(private http: HttpClient) { }

  getCityName(latitude: number, longitude: number): Observable<City> {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    return this.http.get<City>(url)
  }

  getCityWallpaper(name: string): Observable<CityWallpaper[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('name', name);

    return this.http.get<CityWallpaper[]>(environment.apiBaseUrl + '/weather/wallpaper', {params: queryParams})
  }

  getCityKey(query: string): Observable<Object> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', query);

    return this.http.get(environment.apiBaseUrl + '/weather/city', {params: queryParams})
  }

  getCurrent(cityKey: number): Observable<Weather> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('citykey', cityKey);

    return this.http.get<Weather>(environment.apiBaseUrl + '/weather/current', {params: queryParams})
  }

  getHourly(cityKey: number): Observable<Weather[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('citykey', cityKey);

    return this.http.get<Weather[]>(environment.apiBaseUrl + '/weather/hourly', {params: queryParams})
  }
}
