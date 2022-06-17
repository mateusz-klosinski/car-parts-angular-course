import { EditPartComponent } from './../parts/containers/edit-part/edit-part.component';
import { AddPartComponent } from './../parts/containers/add-part/add-part.component';
import { ManagePartsComponent } from '../parts/containers/manage-parts/manage-parts.component';
import { PartsModule } from './../parts/parts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from 'src/layout/layout.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'parts',
  },
  {
    path: 'parts',
    component: ManagePartsComponent,
  },
  {
    path: 'parts/add',
    component: AddPartComponent,
  },
  {
    path: 'parts/edit/:id',
    component: EditPartComponent,
  },
  {
    path: '*',
    redirectTo: 'parts',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    PartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
