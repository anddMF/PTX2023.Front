import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrdEventType } from '../../components/home-hub/home-hub.component';

export class TrdEvent {
  id: number;
  name: TrdEventType;
  info: string;
  asset: string;
  initialPrice: number;
  finalPrice: number;
  initialTotal: number;
  finalTotal: number;
  quantity: number;
  valorization: number;
  moment: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TrdService {

  constructor(private http: HttpClient) { }

  getLastEvents(): Observable<TrdEvent[]> {
    const url = environment.trdApiUrl + '/events';
    return this.http.get<TrdEvent[]>(url);
  }
}
