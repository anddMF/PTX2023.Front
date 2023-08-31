import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dropdown } from '../../models/dropdown.model';

@Component({
  selector: 'app-dropdown-basic',
  templateUrl: './dropdown-basic.component.html',
  styleUrls: ['./dropdown-basic.component.css']
})
export class DropdownBasicComponent {
  @Input() dropdownList: Dropdown[];
  @Input() placeholder: string = ''
  @Input() preSelectedIndex: number = -1;
  @Output() selected = new EventEmitter<Dropdown>();

  selectedText: string;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedText = !this.placeholder ? this.dropdownList[this.preSelectedIndex < 0 ? 0 : this.preSelectedIndex].text : this.placeholder;
  }

  changeDropdownSelected(toSelect: Dropdown) {
    console.log(toSelect)
    this.selectedText = toSelect.text;
    this.selected.emit(toSelect)
  }
}
