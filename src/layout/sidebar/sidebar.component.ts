import { MenuBadgeService } from 'src/layout/shared/menu-badge.service';
import { Component, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'cp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  totalCount$ = this.menuBadgeService?.getBadgeFor('Basket');

  constructor(
    @Optional() private readonly menuBadgeService: MenuBadgeService | null
  ) {}

  ngOnInit() {}
}
