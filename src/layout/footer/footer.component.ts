import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  readonly currentDate = new Date();

  constructor() {}

  ngOnInit() {}
}
