import { Component } from '@angular/core';
import { Dropdown } from 'src/app/shared/models/dropdown.model';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent {

  dropdownCurrencyList: Dropdown[] = [
    { id: 1, text: 'BRL' },
    { id: 2, text: 'CAD' },
    { id: 3, text: 'USD' },
    { id: 4, text: 'EUR' }
  ];

  currencyFrom: Dropdown;
  currencyTo: Dropdown;
  currencyFromValue: string;
  currencyToValue: string = '100';
  currentDate = new Date();

  constructor() {
    // TODO: add pre load for currency BRL to CAD
    this.currencyFrom = this.dropdownCurrencyList[0];
    this.currencyTo = this.dropdownCurrencyList[1];
  }

  changeFromCurrency(selected: Dropdown) {
    this.currencyFrom = selected
  }

  changeToCurrency(selected: Dropdown) {
    this.currencyTo = selected
  }

  getCurrency(from: string, to: string) {
    console.log(from, to)
    if (this.currencyFrom.text === this.currencyTo.text) {
      this.currencyToValue = this.currencyFromValue;
      console.log('caiu if', this.currencyFromValue, this.currencyToValue)
    }
    else {
      const result = +this.currencyFromValue * 4;
      this.currencyToValue = '' + result;
      console.log('caiu else', result, this.currencyToValue)
    }
  }

}
