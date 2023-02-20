import { IComputer, IFilters } from "./computer";

export interface ICatalog {
  computers: IComputer[];
  filters: IFilters;
}