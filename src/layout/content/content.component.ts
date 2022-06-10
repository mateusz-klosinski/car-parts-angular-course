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
  isEditing = false;

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

  id: string | null = null;
  name: string | null = null;
  price: number | null = null;

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
    this.isEditing = true;
    this.id = part.id;
    this.name = part.name;
    this.price = part.price;
  }

  onFormCancelled(): void {
    this.isAdding = false;
    this.isEditing = false;

    this.id = null;
    this.name = null;
    this.price = null;
  }

  onFormSubmitted(partFormData: PartFormData): void {
    var part: Part = {
      id: this.id ?? Math.random().toString(),
      name: partFormData.name,
      price: partFormData.price,
    };

    this.items = this.items.filter((i) => i.id !== part.id);

    this.items.push(part);

    this.id = null;
    this.name = null;
    this.price = null;

    this.isAdding = false;
    this.isEditing = false;
  }
}
