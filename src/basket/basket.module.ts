import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './containers/basket/basket.component';
import { BasketEntryListComponent } from './components/basket-entry-list/basket-entry-list.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BasketComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [
    BasketComponent,
    BasketEntryListComponent,
    BasketSummaryComponent,
  ],
})
export class BasketModule {}
