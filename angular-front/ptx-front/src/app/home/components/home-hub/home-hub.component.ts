import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hub',
  templateUrl: './home-hub.component.html',
  styleUrls: ['./home-hub.component.css']
})
export class HomeHubComponent {
  dropdownSortList = [
    'popularity',
    'date desc',
    'date asc'
  ];

  sortType = '';

  constructor() { }

  changeSortType(selected: string) {
    this.sortType = selected
  }

}
