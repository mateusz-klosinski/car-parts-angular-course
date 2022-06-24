import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cp-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss'],
})
export class BasketSummaryComponent implements OnInit {
  @Input() totalCount = 0;
  @Input() price = 0;

  constructor() {}

  ngOnInit() {}
}
