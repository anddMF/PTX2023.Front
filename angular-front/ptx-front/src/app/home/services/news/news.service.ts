import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsFilter } from '../../models/news-filter.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(filter: NewsFilter): Observable<Object> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('countries', filter.country);
    queryParams = queryParams.append('categories', filter.categories?.length ? this.listToQueryParam(filter.categories) : '');
    // queryParams = queryParams.append('categories', 'health');
    queryParams = queryParams.append('sort', filter.sortType);

    return this.http.get(environment.apiBaseUrl + '/news', {params: queryParams});
  }

  getNewsGpt(query: string): Observable<Object> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('message', query)

    return this.http.get(environment.apiBaseUrl + '/gpt', {params: queryParams});
  }

  listToQueryParam(params: string[]): string {
    let result = params[0];
    for (let i = 1; i < params.length - 1; i++) {
      const currentParam = params[i];
      result += ',' + currentParam;
    }
    return result;
  }
}
