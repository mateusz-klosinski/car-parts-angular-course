import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cp-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() label = '';
  @Input() icon = 'pi pi-cog';

  constructor() {}

  ngOnInit() {}
}
