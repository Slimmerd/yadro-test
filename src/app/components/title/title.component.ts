import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  constructor(private appComponent: AppComponent) {}

  @Input()
  baseCurrency = '';

  @Input()
  extraCurrencies: string[] = [];

  expanded = false;

  toggle(currency?: string) {
    if (currency !== undefined) {
      this.appComponent.addCurrency(currency);
    }

    this.expanded = !this.expanded;
  }

  onObscured(obscured: boolean): void {
    if (obscured) {
      this.expanded = false;
    }
  }

  onActiveZone(active: boolean): void {
    this.expanded = active && this.expanded;
  }
}
