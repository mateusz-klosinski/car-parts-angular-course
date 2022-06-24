import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';

const primengModules: Type<any>[] = [
  ToolbarModule,
  SplitButtonModule,
  ButtonModule,
  TableModule,
  ConfirmDialogModule,
  InputTextModule,
  InputNumberModule,
  MessagesModule,
  MessageModule,
  ProgressSpinnerModule,
  BadgeModule,
  OverlayPanelModule,
  InputTextareaModule,
  DialogModule,
];

@NgModule({
  imports: [CommonModule, ...primengModules],
  exports: [...primengModules],
})
export class PrimengModule {}
