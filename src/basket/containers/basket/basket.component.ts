import { BasketService } from './../../shared/basket.service';
import { EntryAmountChangeEvent } from './../../shared/entry-amount-change-event.model';
import { Basket } from './../../shared/basket.model';
import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cp-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basket$: Observable<Basket | null> = this.basketService.getBasket();
  isProcessingPayment = false;

  constructor(
    private readonly basketService: BasketService,
    private readonly router: Router
  ) {}

  onEntryAmountChanged(event: EntryAmountChangeEvent): void {
    this.basketService.changeAmount(event.partId, event.amount);
  }

  onEntryDeleteClicked(partId: string): void {
    this.basketService.removeEntry(partId);
  }

  goBackToParts(): void {
    this.router.navigate(['/parts']);
  }

  clearBasket(): void {
    this.basketService.clear();
  }

  confirmBasket(): void {
    this.isProcessingPayment = true;
    this.basketService.clear();

    timer(1000).subscribe(() => {
      this.goBackToParts();
    });
  }
}
