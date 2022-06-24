import { BasketService } from './../basket/shared/basket.service';
import { MenuBadgeService } from 'src/layout/shared/menu-badge.service';
import { ConfirmationService } from 'primeng/api';
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
    redirectTo: 'parts/buy',
  },
  {
    path: 'parts',
    loadChildren: () =>
      import('../parts/parts.module').then((m) => m.PartsModule),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('../basket/basket.module').then((m) => m.BasketModule),
  },
  {
    path: '**',
    redirectTo: 'parts',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    ConfirmationService,
    { provide: MenuBadgeService, useExisting: BasketService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
