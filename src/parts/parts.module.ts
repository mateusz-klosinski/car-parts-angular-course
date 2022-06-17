import { LayoutModule } from 'src/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PartFormControlLabelPipe } from './shared/part-form-control-label.pipe';
import { AuthenticateComponent } from './containers/authenticate/authenticate.component';
import { ManagePartsGuard } from './shared/manage-parts-guard.service';

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
    canActivate: [ManagePartsGuard],
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
  {
    path: 'authenticate',
    component: AuthenticateComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ...publicComponents,
    PartFormComponent,
    PartsListComponent,
    PartFormControlLabelPipe,
    AuthenticateComponent,
  ],
  exports: [...publicComponents],
  providers: [PartsService],
})
export class PartsModule {}
