import { PartFormData } from './../../shared/part-form-data.model';
import { Part } from './../../shared/part.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cp-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.scss'],
})
export class EditPartComponent implements OnInit {
  part: Part | null = null;

  constructor(private readonly router: Router) {}

  ngOnInit() {}

  onFormSubmit(data: PartFormData): void {}

  onFormCancel(): void {
    this.router.navigate(['/parts']);
  }
}
