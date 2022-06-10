import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cp-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Output() readonly sidebarSwitched = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onToolbarButtonClicked(): void {
    this.sidebarSwitched.emit();
  }
}
