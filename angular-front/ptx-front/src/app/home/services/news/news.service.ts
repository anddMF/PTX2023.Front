import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsFilter } from '../../models/news-filter.model';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  mockGpt = [
    "[1]: https://brazilian.report/tech/ \"\"\n[2]: https://brazilian.report/tech/2021/03/05/tech-roundup-brazilian-industry-invests-to-go-high-tech/ \"\"\n[3]: https://creativeinsights.gettyimages.com/en/trends/technology/new-tech-in-brazil-rising-fast-but-fading-faster \"\"\n[4]: https://brazilian.report/ \"\"\n\nCertainly! Here are some **technology-related news highlights from Brazil**:\n\n1. **Illegal Cell Phones in the Brazilian Market**:\n   - Approximately **19%** of the Brazilian market consists of illegal cell phones.\n   - The rise of online marketplaces has contributed to the sale of unauthorized devices.\n   - The telecommunications agency, **Anatel**, is now targeting e-commerce platforms to address this issue[^1^][1].\n\n2. **Brazil's Role in Digital Transformation**:\n   - During Brazil's **G20 presidency**, discussions are underway regarding digital transformation and digital government.\n   - Luanna Roncaratti is leading the conversation on key points related to these topics[^1^][1].\n\n3. **Electric Motorcycle Subscription Service**:\n   - Brazilian startup **Mileto** has launched an electric motorcycle subscription service.\n   - The aim is to promote sustainable mobility and encourage adoption of electric vehicles[^1^][1].\n\n4. **Hangover Prevention Capsules**:\n   - Brazilian company **Novvo** has developed a pre-drink supplement to mitigate the toxic effects of alcohol.\n   - These capsules aim to reduce next-day discomfort caused by excessive drinking during festivities like Carnival[^1^][1].\n\n5. **Brazil's Semiconductor Industry Aspirations**:\n   - State-owned firm **Ceitec** is focusing on energy transition and aims to join the global semiconductor chain.\n   - However, the initial investment value falls short of what industry leaders have announced[^1^][1].\n\n6. **Brazil's CERN Membership**:\n   - Brazil's potential membership in **CERN** (European Organization for Nuclear Research) could open doors for its industry.\n   - Despite this opportunity, financial and institutional support for Brazilian scientists remains a challenge[^1^][1].\n\nFor more in-depth coverage, you can explore **Brazil Tech** on **The Brazilian Report**[^1^][1] [^2^][4]. 🇧🇷🔍\n"
  ]

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

    return of(this.mockGpt)
    // return this.http.get(environment.apiBaseUrl + '/gpt', {params: queryParams});
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
