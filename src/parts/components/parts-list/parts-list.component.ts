import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PartsListMode } from 'src/parts/shared/parts-list-mode.enum';
import { Part } from '../../shared/part.model';

@Component({
  selector: 'cp-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss'],
})
export class PartsListComponent implements OnInit {
  @Input() parts: Part[] = [];
  @Input() mode: PartsListMode = PartsListMode.Buy;

  @Output() readonly editClicked = new EventEmitter<Part>();
  @Output() readonly deleteClicked = new EventEmitter<Part>();
  @Output() readonly addToBasketClicked = new EventEmitter<Part>();

  readonly partsListMode = PartsListMode;

  constructor() {}

  ngOnInit() {}

  onEditClicked(part: Part): void {
    this.editClicked.emit(part);
  }

  onDeleteClicked(part: Part): void {
    this.deleteClicked.emit(part);
  }

  onAddToBasketClicked(part: Part): void {
    this.addToBasketClicked.emit(part);
  }
}
