import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrdEvent } from '../../models/trd-event.model';
import { data } from '../../components/positions-container/mock-positions';
@Injectable({
  providedIn: 'root'
})
export class TrdService {

  constructor(private http: HttpClient) { }

  getLastEvents(): Observable<TrdEvent[]> {
    const url = environment.trdApiUrl + '/events';
    console.log('LOCALMODE: ', environment.localMode)
    if(environment.localMode)
      return of(data);

    return this.http.get<TrdEvent[]>(url);
  }
}
