import { Component } from '@angular/core';
import { bgTransparent } from 'src/app/shared/models/dropdown-bg.enum';
import { Dropdown } from 'src/app/shared/models/dropdown.model';
import { CurrencyService } from '../../services/currency/currency.service';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent {

  dropdownCurrencyList: Dropdown[] = [
    { id: 1, text: 'CAD' },
    { id: 2, text: 'BRL' },
    { id: 3, text: 'USD' },
    { id: 4, text: 'EUR' }
  ];

  currencyFrom: Dropdown;
  currencyTo: Dropdown;
  currencyFromValue: number = 1;
  currencyToValue: number = 100;
  currentDate = new Date();

  dropdownBg = bgTransparent;

  constructor(private currencySvc: CurrencyService) {
    this.currencyFrom = this.dropdownCurrencyList[0];
    this.currencyTo = this.dropdownCurrencyList[1];
    this.getCurrency();
  }

  changeFromCurrency(selected: Dropdown) {
    this.currencyFrom = selected
  }

  changeToCurrency(selected: Dropdown) {
    this.currencyTo = selected
  }

  getCurrency() {
    if (this.currencyFrom.text === this.currencyTo.text) {
      this.currencyToValue = this.currencyFromValue;
    }
    else {
      this.currencySvc.getCurrency(this.currencyFrom.text, this.currencyTo.text).subscribe((x: Currency) => {
        this.currentDate = x.date;
        this.currencyToValue = this.currencyFromValue * x.rate;
      })
    }
  }
}
