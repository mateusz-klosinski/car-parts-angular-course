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

  constructor(private readonly partsService: PartsService) {}

  ngOnInit() {
    this.parts = this.partsService.getParts();
  }
}
