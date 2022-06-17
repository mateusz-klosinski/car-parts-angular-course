import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Part } from '../../shared/part.model';

@Component({
  selector: 'cp-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss'],
})
export class PartsListComponent implements OnInit {
  @Input() parts: Part[] = [];

  @Output() readonly editClicked = new EventEmitter<Part>();
  @Output() readonly deleteClicked = new EventEmitter<Part>();

  constructor() {}

  ngOnInit() {}

  onEditClicked(part: Part): void {
    this.editClicked.emit(part);
  }

  onDeleteClicked(part: Part): void {
    this.deleteClicked.emit(part);
  }
}
