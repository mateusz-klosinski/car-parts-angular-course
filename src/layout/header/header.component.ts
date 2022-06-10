import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() label: string = '';
  @Input() addButtonVisible = false;

  @Output() readonly addButtonClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
