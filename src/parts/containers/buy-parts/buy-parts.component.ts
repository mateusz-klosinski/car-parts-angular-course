import { BasketService } from './../../../basket/shared/basket.service';
import { PartsService } from './../../shared/parts.service';
import { Part } from './../../shared/part.model';
import { Component } from '@angular/core';

@Component({
  selector: 'cp-buy-parts',
  templateUrl: './buy-parts.component.html',
  styleUrls: ['./buy-parts.component.scss'],
})
export class BuyPartsComponent {
  parts$ = this.partsService.getParts();

  constructor(
    private readonly partsService: PartsService,
    private readonly basketService: BasketService
  ) {}

  onAddToBasketClicked(part: Part): void {
    this.basketService.addPart(part);
  }
}
