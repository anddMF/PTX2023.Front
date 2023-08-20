import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dropdown } from '../../models/dropdown.model';

@Component({
  selector: 'app-dropdown-basic',
  templateUrl: './dropdown-basic.component.html',
  styleUrls: ['./dropdown-basic.component.css']
})
export class DropdownBasicComponent {
  @Input() dropdownList: Dropdown[];
  @Output() selected = new EventEmitter<Dropdown>();

  dropdownSelected: Dropdown;

  constructor() {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dropdownSelected = this.dropdownList[0];
    
  }

  changeDropdownSelected(toSelect: Dropdown){
    console.log(toSelect)
    this.dropdownSelected = toSelect;
    this.selected.emit(toSelect)
  }
}
