import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  delay,
  map,
  Observable,
  repeat,
  switchMap,
  throwError,
} from 'rxjs';
import { IRate } from '../models';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  private currencies$ = new BehaviorSubject(['USD', 'EUR', 'GBP']);
  private apiKey = 'rCC4QBD1Gjli1EBJX0q6LKzUNqUKZyMi';

  get(): Observable<IRate> {
    return this.currencies$.pipe(
      switchMap(currencies => {
        return this.http
          .get<IRate>(
            `https://api.apilayer.com/currency_data/live?source=RUB&currencies=${currencies}`,
            {
              headers: {
                apikey: this.apiKey,
              },
            }
          )
          .pipe(
            map((data: IRate) => {
              return {
                ...data,
                quotes: Object.fromEntries(
                  Object.entries(data.quotes).map(([key, value]) => [
                    key.slice(3),
                    1 / value,
                  ])
                ),
              };
            }),
            repeat({ delay: 5000 }),
            delay(300),
            catchError(this.errorHandler.bind(this))
          );
      })
    );
  }

  addCurrency(currency: string) {
    const prevCurrencies = this.currencies$.value;

    if (prevCurrencies.find(curr => curr == currency)) return;

    const newCurrencies = [...prevCurrencies, currency];

    this.currencies$.next(newCurrencies);
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
