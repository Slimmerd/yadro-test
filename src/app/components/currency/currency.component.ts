import { Component, Input } from '@angular/core';
import { ICurrency } from 'src/app/models';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  @Input()
  currency: ICurrency = {
    name: 'RUR',
    value: 0,
    difference: 0,
  };

  @Input()
  isLoading = false;
}
