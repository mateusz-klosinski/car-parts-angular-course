import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

const primengModules: Type<any>[] = [
  ToolbarModule,
  SplitButtonModule,
  ButtonModule,
  TableModule,
];

@NgModule({
  imports: [CommonModule, ...primengModules],
  exports: [...primengModules],
})
export class PrimengModule {}
