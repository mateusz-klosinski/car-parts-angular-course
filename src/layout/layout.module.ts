import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrimengModule, FormsModule],
  exports: [LayoutComponent, PrimengModule],
  declarations: [
    LayoutComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    MenuItemComponent,
  ],
})
export class LayoutModule {}
