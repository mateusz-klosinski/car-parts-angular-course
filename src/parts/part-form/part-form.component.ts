import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PartFormData } from '../shared/part-form-data.model';

@Component({
  selector: 'cp-part-form',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss'],
})
export class PartFormComponent implements OnInit {
  @Input() name: string | null = null;
  @Input() price: number | null = null;

  @Output() readonly submitted = new EventEmitter<PartFormData>();
  @Output() readonly cancelled = new EventEmitter<void>();

  internalName: string | null = null;
  internalPrice: number | null = null;

  constructor() {}

  ngOnInit() {
    this.internalName = this.name;
    this.internalPrice = this.price;
  }

  onFormSubmitted(): void {
    if (!this.internalName || !this.internalPrice) {
      throw new Error('Fields must be filled!');
    }

    this.submitted.emit({ name: this.internalName, price: this.internalPrice });
  }

  onFormCancelled(): void {
    this.cancelled.emit();
  }
}
