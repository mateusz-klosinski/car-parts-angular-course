import { Part } from './../../parts/shared/part.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Basket } from './basket.model';
import { MenuBadgeService } from 'src/layout/shared/menu-badge.service';

@Injectable({ providedIn: 'root' })
export class BasketService implements MenuBadgeService {
  private readonly basketSubject = new BehaviorSubject<Basket>(new Basket([]));

  getBasket(): Observable<Basket> {
    return this.basketSubject.asObservable();
  }

  getTotalCount(): Observable<number> {
    return this.getBasket().pipe(map((b) => b.totalCount));
  }

  getBadgeFor(label: string): Observable<string | null> {
    if (label !== 'Basket') {
      throw new Error(`Cannot provide badge for label: ${label}`);
    }

    return this.getTotalCount().pipe(
      map((totalCount) => {
        if (totalCount > 0) {
          return totalCount.toString();
        }

        return null;
      })
    );
  }

  addPart(part: Part): void {
    this.basketSubject.next(this.basketSubject.value.addPart(part));
  }

  changeAmount(partId: string, amount: number): void {
    this.basketSubject.next(
      this.basketSubject.value.changeAmount(partId, amount)
    );
  }

  removeEntry(partId: string): void {
    this.basketSubject.next(this.basketSubject.value.removeEntry(partId));
  }

  clear(): void {
    this.basketSubject.next(this.basketSubject.value.clear());
  }
}
