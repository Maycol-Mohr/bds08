export type Store = 'Uberaba' | 'Uberlandia' | 'Araguari' | 'Ituiutaba';
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterStore = {
  stores?: Store[] | undefined;
};

export type SalesByGender2 = {
  gender: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
