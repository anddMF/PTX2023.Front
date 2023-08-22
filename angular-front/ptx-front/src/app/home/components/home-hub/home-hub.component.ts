import { Component } from '@angular/core';
import { Dropdown } from 'src/app/shared/models/dropdown.model';

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
    { id: 1, text: 'brazil' },
    { id: 2, text: 'canada' }
  ]

  categories: CategoryButton[] = [
    { name: 'business', id: 1, active: false },
    { name: 'sports', id: 2, active: false },
    { name: 'health', id: 1, active: false },
    { name: 'science', id: 1, active: false },
    { name: 'tech', id: 1, active: false }
  ]

  sortType: Dropdown;
  country: Dropdown;

  constructor() { }

  changeSortType(selected: Dropdown) {
    this.sortType = selected
  }

  changeCountry(selected: Dropdown) {
    this.country = selected;
  }

  setActiveCategory(clickedCategory: CategoryButton) {
    clickedCategory.active = !clickedCategory.active;
  }

}
