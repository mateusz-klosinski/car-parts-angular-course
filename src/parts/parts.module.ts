import { PartsListComponent } from './parts-list/parts-list.component';
import { PrimengModule } from './../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartFormComponent } from './part-form/part-form.component';

const publicComponents: Type<any>[] = [PartFormComponent, PartsListComponent];

@NgModule({
  imports: [CommonModule, FormsModule, PrimengModule],
  declarations: [...publicComponents],
  exports: [...publicComponents],
})
export class PartsModule {}
