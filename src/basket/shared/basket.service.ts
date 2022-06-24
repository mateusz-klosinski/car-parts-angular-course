import { AddPartToBasketRequest } from './add-part-to-basket-request.model';
import { ChangeAmountInBasketRequest } from './change-amount-in-basket-request.model';
import { filter, switchMap } from 'rxjs/operators';
import { ClientIdStoreService } from './../../shared/client-id-store.service';
import { environment } from './../../environments/environment';
import { Part } from './../../parts/shared/part.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Basket } from './basket.model';
import { MenuBadgeService } from 'src/layout/shared/menu-badge.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BasketService implements MenuBadgeService {
  private readonly baseUrl = environment.baseUrl + 'basket';
  private readonly basketSubject = new BehaviorSubject<Basket | null>(null);

  constructor(
    private readonly http: HttpClient,
    private clientIdStore: ClientIdStoreService
  ) {
    this.requestWithClientIdContext((id) =>
      this.http.get<Basket>(this.baseUrl + `/${id}`)
    );
  }

  getBasket(): Observable<Basket | null> {
    return this.basketSubject.asObservable();
  }

  getTotalCount(): Observable<number> {
    return this.getBasket().pipe(
      filter((b) => !!b),
      map((b) => b!.totalCount)
    );
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
    this.requestWithClientIdContext((id) => {
      const url = this.baseUrl + `/part`;
      const request: AddPartToBasketRequest = {
        partId: part.id,
        clientId: id,
      };

      return this.http.post<Basket>(url, request);
    });
  }

  changeAmount(partId: string, amount: number): void {
    this.requestWithClientIdContext((id) => {
      const url = this.baseUrl + `/part`;
      const request: ChangeAmountInBasketRequest = {
        clientId: id,
        partId,
        amount,
      };

      return this.http.put<Basket>(url, request);
    });
  }

  removeEntry(partId: string): void {
    this.requestWithClientIdContext((id) => {
      const url = this.baseUrl + `/${id}/part/${partId}`;
      return this.http.delete<Basket>(url);
    });
  }

  clear(): void {
    this.requestWithClientIdContext((id) => {
      const url = this.baseUrl + `/${id}`;
      return this.http.delete<Basket>(url);
    });
  }

  private requestWithClientIdContext(
    requestAction: (id: string) => Observable<Basket>
  ) {
    this.clientIdStore
      .getClientId()
      .pipe(switchMap((id) => requestAction(id)))
      .subscribe((basket) => this.basketSubject.next(basket));
  }
}
