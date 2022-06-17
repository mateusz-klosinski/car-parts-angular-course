import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './containers/basket/basket.component';

const routes: Routes = [
  {
    path: '',
    component: BasketComponent,
  },
];

@NgModule({
  imports: [CommonModule, LayoutModule, RouterModule.forChild(routes)],
  declarations: [BasketComponent],
})
export class BasketModule {}
