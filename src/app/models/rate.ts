export interface IRate {
  quotes: {
    [key: string]: number;
  };
  source: string;
  success: boolean;
  timestamp: number;
}
