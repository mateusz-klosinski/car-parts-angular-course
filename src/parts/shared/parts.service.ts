import { PartFormData } from './part-form-data.model';
import { Injectable } from '@angular/core';
import { Part } from './part.model';

@Injectable()
export class PartsService {
  private readonly parts: Part[] = [
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

  getPart(id: string): Part | null {
    return this.parts.find((p) => p.id === id) ?? null;
  }

  addPart(data: PartFormData): void {
    this.parts.push({
      id: Math.random().toString(),
      name: data.name,
      price: data.price,
    });
  }

  updatePart(id: string, data: PartFormData): void {
    const part = this.parts.find((p) => p.id === id);

    if (!part) {
      throw new Error(`Part with id: ${id} does not exist!`);
    }

    part.name = data.name;
    part.price = data.price;
  }

  deletePart(id: string): void {
    const index = this.parts.findIndex((p) => p.id === id);

    if (index < 0) {
      throw new Error(`Part with id ${id} does not exist!`);
    }

    this.parts.splice(index, 1);
  }
}
