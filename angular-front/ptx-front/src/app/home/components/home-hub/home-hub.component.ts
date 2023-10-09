import { Component } from '@angular/core';
import { Dropdown } from 'src/app/shared/models/dropdown.model';
import { NewsService } from '../../services/news/news.service';
import { NewsFilter } from '../../models/news-filter.model';

interface CategoryButton {
  id: number;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-home-hub',
  templateUrl: './home-hub.component.html',
  styleUrls: ['./home-hub.component.css']
})
export class HomeHubComponent {

  dropdownSortList: Dropdown[] = [
    { id: 1, text: 'popularity' },
    { id: 2, text: 'date desc' },
    { id: 3, text: 'date asc' }
  ];

  dropdownCountryList: Dropdown[] = [
    { id: 1, text: 'brazil', value: 'br' },
    { id: 2, text: 'canada', value: 'ca' },
    { id: 3, text: 'usa', value: 'us' },
    { id: 4, text: 'germany', value: 'de' },
    { id: 5, text: 'france', value: 'fr' }
  ]

  categories: CategoryButton[] = [
    { name: 'business', id: 1, active: false },
    { name: 'sports', id: 2, active: false },
    { name: 'health', id: 3, active: false },
    { name: 'science', id: 4, active: false },
    { name: 'technology', id: 5, active: false }
  ]

  mockNews: any = [
    {
      "author": "Business Wire",
      "category": "business",
      "country": "us",
      "description": "TORONTO &#8212; AnalytixInsight Inc. (“AnalytixInsight”, or the “Company”) (TSX-V: ALY), a financial content and enterprise software solutions provider, reports its financial results for the year ended December 31, 2022, and provides a corporate update including that of MarketWall, the Company’s 49%-owned fintech affiliate. The Company also announces the appointment of its Chief Operating Officer and [&#8230;]",
      "image": "https://i-invdn-com.investing.com/news/LYNXNPEE1J1IK_M.jpg",
      "language": "en",
      "published_at": "2023-05-01T12:02:03+00:00",
      "source": "Financial Post | Canada Business News",
      "title": "AnalytixInsight Reports 2022 Financial Results, Provides Corporate Update and Reports MarketWall Q1 2023 Record Financial Results",
      "url": "https://financialpost.com/pmn/press-releases-pmn/business-wire-news-releases-pmn/analytixinsight-reports-2022-financial-results-provides-corporate-update-and-reports-marketwall-q1-2023-record-financial-results"
    },
    {
      "author": "Reuters",
      "category": "business",
      "country": "us",
      "description": "WASHINGTON &#8212; U.S. manufacturing pulled off a three-year low in April as new orders improved slightly and employment rebounded, but activity remained depressed amid higher borrowing costs and tighter credit, which have raised the risk of a recession this year. Despite the weakness in factory activity and demand for goods reported by the Institute for [&#8230;]",
      "image": "https://bl-i.thgim.com/public/incoming/j1a6bz/article66800970.ece/alternates/LANDSCAPE_1200/PTI01_31_2023_000294B.jpg",
      "language": "en",
      "published_at": "2023-05-01T17:49:11+00:00",
      "source": "Financial Post | Canada Business News",
      "title": "US manufacturing contracts again in April, but pace slows",
      "url": "https://financialpost.com/pmn/business-pmn/us-manufacturing-contracts-again-in-april-but-pace-slows"
    }
  ]

  sortType: Dropdown = this.dropdownSortList[0];
  country: Dropdown = this.dropdownCountryList[0];

  constructor(private newsSvc: NewsService) { }

  changeSortType(selected: Dropdown) {
    this.sortType = selected
  }

  changeCountry(selected: Dropdown) {
    this.country = selected;
  }

  setActiveCategory(clickedCategory: CategoryButton) {
    clickedCategory.active = !clickedCategory.active;
  }

  cleanFilters() {
    this.categories.forEach(x => x.active = false);
  }

  getNews() {
    let foundCategories = this.categories.filter(x => x.active).map(y => { return y.name });
    const selectedCategories = foundCategories ? foundCategories : undefined;
    const filter: NewsFilter = {
      country: this.country.value,
      sortType: this.sortType.text,
      categories: selectedCategories
    };

    this.newsSvc.getNews(filter).subscribe(x => {
      console.log(x)
      this.mockNews = x
    })
  }

  imageAsBackground(imageUrl: string) {
    const styleObj = { 'background-image': `url("${imageUrl}")` };
    return styleObj;
  }

  openLink(url: string) {
    window.open(url);
  }
}
