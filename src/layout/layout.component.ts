import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isSidebarVisible = true;

  constructor() {}

  ngOnInit() {}

  onSidebarSwitched(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
