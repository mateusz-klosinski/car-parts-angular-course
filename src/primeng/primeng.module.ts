import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

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
];

@NgModule({
  imports: [CommonModule, ...primengModules],
  exports: [...primengModules],
  providers: [ConfirmationService],
})
export class PrimengModule {}
