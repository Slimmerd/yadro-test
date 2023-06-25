import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class DateComponent {
  @Input()
  timestamp = 1414051200000;
}
