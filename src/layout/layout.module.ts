import { PrimengModule } from './../primeng/primeng.module';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HeaderComponent } from './header/header.component';
import { FormControlErrorsComponent } from './form-control-errors/form-control-errors.component';
import { ControlErrorMessagesPipe } from './shared/control-error-messages.pipe';

const publicApi: Type<any>[] = [
  HeaderComponent,
  LayoutComponent,
  FormControlErrorsComponent,
  ControlErrorMessagesPipe,
];

@NgModule({
  imports: [CommonModule, PrimengModule],
  exports: [PrimengModule, ...publicApi],
  declarations: [
    ...publicApi,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    MenuItemComponent,
  ],
})
export class LayoutModule {}
