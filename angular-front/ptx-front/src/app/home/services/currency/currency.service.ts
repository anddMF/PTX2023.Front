import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '../../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }

  getCurrency(from: string, to: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('from', from);
    queryParams = queryParams.append('to', to);
    queryParams = queryParams.append('date', 'latest');

    console.log(queryParams)
    return this.http.get<Currency>('http://127.0.0.1:5000/currency/rate', {params: queryParams});
  }
}
