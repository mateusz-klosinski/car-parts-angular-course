import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  imports: [CommonModule],
  exports: [LayoutComponent],
  declarations: [
    LayoutComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
  ],
})
export class LayoutModule {}
