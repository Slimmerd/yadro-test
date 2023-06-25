import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<string>();

  handle(error: string) {
    this.error$.next(error);
  }

  clear() {
    this.error$.next('');
  }
}
