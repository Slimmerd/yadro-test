import { ICurrency, IRate } from '../models';

// Use these objects to avoid API calls
export const debugRate: IRate = {
  success: true,
  timestamp: 1687716663,
  source: 'RUB',
  quotes: {
    USD: 84.62384700008462,
    EUR: 92.50693802035153,
    GBP: 107.59629868732516,
  },
};

export const debugPrevValues: ICurrency[] = [
  { name: 'USD', value: 82.62384700008462, difference: 0 },
  { name: 'EUR', value: 93.62384700008462, difference: 0 },
  { name: 'GBP', value: 100.62384700008462, difference: 0 },
];
