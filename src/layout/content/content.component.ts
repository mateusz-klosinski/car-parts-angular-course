import { PartFormData } from './../../parts/shared/part-form-data.model';
import { Part } from './../../parts/shared/part.model';
import { Component, OnInit, Optional } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'cp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  isAdding = false;

  items: Part[] = [
    {
      id: '1',
      name: 'head gasket',
      price: 110,
    },
    {
      id: '2',
      name: 'spark plug',
      price: 70,
    },
  ];

  selectedPart: Part | null = null;

  constructor(private readonly confirmationService: ConfirmationService) {}

  ngOnInit() {}

  deletePart(part: Part): void {
    this.confirmationService.confirm({
      header: 'Delete confirmation',
      message: 'Do you really want to delete part?',
      accept: () => (this.items = this.items.filter((i) => i.id !== part.id)),
    });
  }

  addPart(): void {
    this.isAdding = true;
  }

  editPart(part: Part): void {
    this.selectedPart = part;
  }

  onFormCancelled(): void {
    this.isAdding = false;
    this.selectedPart = null;
  }

  onFormSubmitted(partFormData: PartFormData): void {
    var part: Part = {
      id: this.selectedPart?.id ?? Math.random().toString(),
      name: partFormData.name,
      price: partFormData.price,
    };

    this.items = this.items.filter((i) => i.id !== part.id);
    this.items.push(part);

    this.selectedPart = null;

    this.isAdding = false;
  }
}
