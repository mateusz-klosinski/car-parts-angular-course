import { Part } from './../../parts/shared/part.model';
export class BasketEntry {
  readonly price: number;

  constructor(readonly part: Part, readonly amount: number) {
    this.price = part.price * amount;
  }

  changeAmount(amount: number): BasketEntry {
    return new BasketEntry(this.part, amount);
  }
}

export class Basket {
  readonly totalCount: number;
  readonly price: number;

  constructor(readonly entries: BasketEntry[]) {
    this.totalCount = entries
      .map((e) => e.amount)
      .reduce((prev, current) => prev + current, 0);

    this.price = entries
      .map((e) => e.price)
      .reduce((prev, current) => prev + current, 0);
  }

  addPart(part: Part): Basket {
    const entry = new BasketEntry(part, 1);
    const entries = [...this.entries, entry];

    return new Basket(entries);
  }

  changeAmount(partId: string, amount: number): Basket {
    const entry = this.entries.find((e) => e.part.id === partId);

    if (!entry) {
      throw new Error(`Part with id ${partId} not found in basket`);
    }

    const newEntry = entry.changeAmount(amount);
    const entries = this.entries.map((e) => {
      if (e.part.id !== partId) {
        return e;
      }

      return newEntry;
    });

    return new Basket(entries);
  }

  removeEntry(partId: string) {
    const newEntries = this.entries.filter((e) => e.part.id !== partId);
    return new Basket(newEntries);
  }

  clear(): Basket {
    return new Basket([]);
  }
}
