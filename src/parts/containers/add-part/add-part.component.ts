import { PartsService } from './../../shared/parts.service';
import { PartFormData } from './../../shared/part-form-data.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cp-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.scss'],
})
export class AddPartComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly partsService: PartsService
  ) {}

  ngOnInit() {}

  onFormSubmit(data: PartFormData): void {
    this.partsService.addPart(data).subscribe(() => {
      this.goBackToList();
    });
  }

  goBackToList(): void {
    this.router.navigate(['/parts/manage']);
  }
}
