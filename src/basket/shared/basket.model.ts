import { Part } from './../../parts/shared/part.model';

export interface BasketEntry {
  readonly id: string;
  readonly part: Part;
  readonly amount: number;
  readonly price: number;
}

export interface Basket {
  readonly id: string;
  readonly entries: BasketEntry[];
  readonly totalCount: number;
  readonly price: number;
  readonly isEmpty: boolean;
}
