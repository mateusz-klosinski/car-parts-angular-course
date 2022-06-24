import { BasketService } from './../../../basket/shared/basket.service';
import { PartsService } from './../../shared/parts.service';
import { Part } from './../../shared/part.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-buy-parts',
  templateUrl: './buy-parts.component.html',
  styleUrls: ['./buy-parts.component.scss'],
})
export class BuyPartsComponent implements OnInit {
  parts: Part[] = [];

  constructor(
    private readonly partsService: PartsService,
    private readonly basketService: BasketService
  ) {}

  ngOnInit() {
    this.parts = this.partsService.getParts();
  }

  onAddToBasketClicked(part: Part): void {
    this.basketService.addPart(part);
  }
}
