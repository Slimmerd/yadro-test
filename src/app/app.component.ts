import { Component, OnInit } from '@angular/core';
import { ICurrency } from './models';
import { RateService } from './services/rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private rateService: RateService) {}

  isLoading = false;
  baseCurrency = 'RUB';
  extraCurrencies = ['CNY', 'JPY', 'TRY'];
  timestamp = 1414051200000;
  currencies: ICurrency[] = [];

  ngOnInit(): void {
    this.isLoading = true;
    this.rateService.get().subscribe(data => {
      const newCurrencies: ICurrency[] = [];

      Object.entries(data.quotes).forEach(([key, value]) => {
        const prevCurrency = this.currencies.find(
          currency => currency.name === key
        );

        if (prevCurrency) {
          newCurrencies.push({
            name: key,
            value: value,
            difference: value - prevCurrency.value,
          });

          return;
        }

        newCurrencies.push({ name: key, value: value, difference: 0 });
      });
      this.currencies = newCurrencies;
      this.timestamp = Date.now();
      this.isLoading = false;
    });
  }

  addCurrency(newCurrency: string): void {
    this.extraCurrencies = this.extraCurrencies.filter(
      currency => currency !== newCurrency
    );
    this.rateService.addCurrency(newCurrency);
  }
}

// Debug onInit
/* 
import { debugRate, debugPrevValues } from './debug/helper';

  ngOnInit(): void {
      const newCurrencies: ICurrency[] = [];

      Object.entries(debugRate.quotes).forEach(([key, value]) => {
        const prevCurrency = debugPrevValues.find((currency) => currency.name === key);

        if (prevCurrency) {
          newCurrencies.push({
            name: key,
            value: value,
            difference: value - prevCurrency.value,
          });

          return;
        }

        newCurrencies.push({ name: key, value: value, difference: 0 });
      });
      this.currencies = newCurrencies;
      this.timestamp = debugRate.timestamp;
  }
*/
