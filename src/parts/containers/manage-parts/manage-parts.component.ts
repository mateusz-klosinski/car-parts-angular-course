import { PartsListMode } from './../../shared/parts-list-mode.enum';
import { PartsService } from './../../shared/parts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Part } from '../../shared/part.model';

@Component({
  selector: 'cp-manage-parts',
  templateUrl: './manage-parts.component.html',
  styleUrls: ['./manage-parts.component.scss'],
})
export class ManagePartsComponent implements OnInit {
  readonly partsListMode = PartsListMode;

  items: Part[] = [];

  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly router: Router,
    private readonly partsService: PartsService
  ) {}

  ngOnInit(): void {
    this.items = this.partsService.getParts();
  }

  deletePart(part: Part): void {
    this.confirmationService.confirm({
      header: 'Delete confirmation',
      message: 'Do you really want to delete part?',
      accept: () => this.partsService.deletePart(part.id),
    });
  }

  addPart(): void {
    this.router.navigate(['/parts/add']);
  }

  editPart(part: Part): void {
    this.router.navigate(['/parts/edit', part.id]);
  }
}
