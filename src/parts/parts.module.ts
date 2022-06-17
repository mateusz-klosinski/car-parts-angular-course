import { LayoutModule } from 'src/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsListComponent } from './components/parts-list/parts-list.component';
import { PartFormComponent } from './components/part-form/part-form.component';
import { ManagePartsComponent } from './containers/manage-parts/manage-parts.component';
import { EditPartComponent } from './containers/edit-part/edit-part.component';
import { AddPartComponent } from './containers/add-part/add-part.component';

const publicComponents: Type<any>[] = [
  ManagePartsComponent,
  EditPartComponent,
  AddPartComponent,
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LayoutModule],
  declarations: [...publicComponents, PartFormComponent, PartsListComponent],
  exports: [...publicComponents],
})
export class PartsModule {}
