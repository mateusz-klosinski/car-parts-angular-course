import { PartsService } from './../../shared/parts.service';
import { PartFormData } from './../../shared/part-form-data.model';
import { Part } from './../../shared/part.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'cp-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.scss'],
})
export class EditPartComponent implements OnInit, OnDestroy {
  part: Part | null = null;

  private readonly unsubscribe = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly partsService: PartsService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        filter((params) => params['id']),
        map((params) => params['id']),
        switchMap((id) => this.partsService.getPart(id)),
        takeUntil(this.unsubscribe)
      )
      .subscribe((part) => (this.part = part));
  }

  onFormSubmit(data: PartFormData): void {
    if (!this.part) {
      throw new Error('Can not submit form, part is not assigned!');
    }

    this.partsService.updatePart(this.part.id, data).subscribe(() => {
      this.goBackToList();
    });
  }

  goBackToList(): void {
    this.router.navigate(['/parts/manage']);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
