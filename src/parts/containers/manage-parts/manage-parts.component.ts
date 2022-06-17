import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { PartFormData } from '../../shared/part-form-data.model';
import { Part } from '../../shared/part.model';

@Component({
  selector: 'cp-manage-parts',
  templateUrl: './manage-parts.component.html',
  styleUrls: ['./manage-parts.component.scss'],
})
export class ManagePartsComponent implements OnInit {
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

  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  deletePart(part: Part): void {
    this.confirmationService.confirm({
      header: 'Delete confirmation',
      message: 'Do you really want to delete part?',
      accept: () => (this.items = this.items.filter((i) => i.id !== part.id)),
    });
  }

  addPart(): void {
    this.router.navigate(['/parts/add']);
  }

  editPart(part: Part): void {
    this.router.navigate(['/parts/edit', part.id]);
  }
}
