export enum Stock {
  InStock = 0,
  Limited = 1,
  OutStock = 2
}

export interface IComputer {
  id: string,
  image: {
    src: string;
    alt: string;
  };
  name: string;
  rating: number;
  price: string | number;
  stock: Stock;
  reviewsCount: number;
  boardId: string;
  videocardId: string;
  processorId: string;
  stylingId: string;
}

export interface IFilter {
  id: string;
  name: string;
}

export interface IFilters {
  videocards: IFilter[];
  boards: IFilter[];
  processors: IFilter[];
  stylings: IFilter[];
}

export type TActiveFilterIds = Record<keyof IFilters, string[]>;