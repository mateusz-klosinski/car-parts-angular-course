import { BasketService } from './../../shared/basket.service';
import { EntryAmountChangeEvent } from './../../shared/entry-amount-change-event.model';
import { Basket } from './../../shared/basket.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'cp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basket$: Observable<Basket> = this.basketService.getBasket();

  constructor(private readonly basketService: BasketService) {}

  onEntryAmountChanged(event: EntryAmountChangeEvent): void {
    this.basketService.changeAmount(event.partId, event.amount);
  }

  onEntryDeleteClicked(partId: string): void {
    this.basketService.removeEntry(partId);
  }
}
