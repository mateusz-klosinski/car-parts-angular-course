import { PartFormData } from './part-form-data.model';
import { Injectable } from '@angular/core';
import { Part } from './part.model';

@Injectable()
export class PartsService {
  readonly parts: Part[] = [
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

  getParts(): Part[] {
    return this.parts;
  }

  addPart(data: PartFormData): void {}

  updatePart(id: string, data: PartFormData): void {}

  deletePart(id: string): void {}
}
