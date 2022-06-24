import { EntryAmountChangeEvent } from './../../shared/entry-amount-change-event.model';
import { BasketEntry } from './../../shared/basket.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cp-basket-entry-list',
  templateUrl: './basket-entry-list.component.html',
  styleUrls: ['./basket-entry-list.component.scss'],
})
export class BasketEntryListComponent implements OnInit {
  @Input() entries: BasketEntry[] = [];

  @Output() readonly amountChanged = new EventEmitter<EntryAmountChangeEvent>();
  @Output() readonly deleteClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onAmountChanged(basketEntry: BasketEntry, amount: number): void {
    this.amountChanged.emit({ partId: basketEntry.part.id, amount });
  }

  onDeleteEntryClicked(basketEntry: BasketEntry): void {
    this.deleteClicked.emit(basketEntry.part.id);
  }
}
