import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class TrdEvent {
  id: number;
  name: string;
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
