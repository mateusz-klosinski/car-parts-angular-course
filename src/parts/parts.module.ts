import { LayoutModule } from 'src/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsListComponent } from './components/parts-list/parts-list.component';
import { PartFormComponent } from './components/part-form/part-form.component';
import { ManagePartsComponent } from './containers/manage-parts/manage-parts.component';
import { EditPartComponent } from './containers/edit-part/edit-part.component';
import { AddPartComponent } from './containers/add-part/add-part.component';
import { PartsService } from './shared/parts.service';
import { BuyPartsComponent } from './containers/buy-parts/buy-parts.component';
import { Routes, RouterModule } from '@angular/router';

const publicComponents: Type<any>[] = [
  ManagePartsComponent,
  EditPartComponent,
  AddPartComponent,
  BuyPartsComponent,
];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'buy',
  },
  {
    path: 'buy',
    component: BuyPartsComponent,
  },
  {
    path: 'manage',
    component: ManagePartsComponent,
  },
  {
    path: 'add',
    component: AddPartComponent,
  },
  {
    path: 'edit/:id',
    component: EditPartComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ],
  declarations: [...publicComponents, PartFormComponent, PartsListComponent],
  exports: [...publicComponents],
  providers: [PartsService],
})
export class PartsModule {}
