import { FormControlErrorsComponent } from './form-control-errors/form-control-errors.component';
import { PartsListComponent } from './parts-list/parts-list.component';
import { PrimengModule } from './../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartFormComponent } from './part-form/part-form.component';
import { ControlErrorMessagesPipe } from './shared/control-error-messages.pipe';

const publicComponents: Type<any>[] = [PartFormComponent, PartsListComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, PrimengModule],
  declarations: [
    ...publicComponents,
    FormControlErrorsComponent,
    ControlErrorMessagesPipe,
  ],
  exports: [...publicComponents],
})
export class PartsModule {}
