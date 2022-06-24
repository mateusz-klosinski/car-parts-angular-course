import { Part } from './../../parts/shared/part.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Basket } from './basket.model';

@Injectable({ providedIn: 'root' })
export class BasketService {
  private readonly basketSubject = new BehaviorSubject<Basket>(new Basket([]));

  getBasket(): Observable<Basket> {
    return this.basketSubject.asObservable();
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
}
