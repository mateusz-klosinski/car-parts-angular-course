import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'cp-form-control-errors',
  templateUrl: './form-control-errors.component.html',
  styleUrls: ['./form-control-errors.component.scss'],
})
export class FormControlErrorsComponent implements OnInit {
  @Input() controlLabel = '';
  @Input() controlErrors: ValidationErrors | null = null;

  ngOnInit() {}
}
