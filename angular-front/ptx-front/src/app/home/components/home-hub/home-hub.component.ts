import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hub',
  templateUrl: './home-hub.component.html',
  styleUrls: ['./home-hub.component.css']
})
export class HomeHubComponent {
  dropdownList = [
    'popularity',
    'date desc',
    'date asc'
  ]

  dropdownSelected: string = this.dropdownList[0];

  constructor() { }

  changeDropdownSelected(toSelect: string){
    console.log(toSelect)
    this.dropdownSelected = toSelect;
  }

}
