export type Store = 'Uberaba' | 'Uberlandia' | 'Araguari' | 'Ituiutaba';

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterStore = {
  stores?: Store[];
};
