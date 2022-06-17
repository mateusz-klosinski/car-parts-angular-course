import { PartFormControls } from '../../shared/part-form-controls.enum';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { PartFormData } from '../../shared/part-form-data.model';
import { Part } from '../../shared/part.model';

@Component({
  selector: 'cp-part-form',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss'],
})
export class PartFormComponent implements OnInit {
  @Input() set part(value: Part | null) {
    if (value) {
      this.partForm.patchValue(value);
    } else {
      this.partForm.reset();
    }
  }

  @Output() readonly submitted = new EventEmitter<PartFormData>();
  @Output() readonly cancelled = new EventEmitter<void>();

  readonly partFormControls = PartFormControls;

  readonly partForm = this.formBuilder.group({
    [PartFormControls.Name]: [null, [Validators.required]],
    [PartFormControls.Price]: [null, [Validators.required, Validators.min(1)]],
  });

  constructor(private readonly formBuilder: UntypedFormBuilder) {}

  ngOnInit() {}

  onFormSubmitted(): void {
    const partData = this.partForm.getRawValue() as PartFormData;
    this.submitted.emit(partData);
  }

  onFormCancelled(): void {
    this.cancelled.emit();
  }
}
