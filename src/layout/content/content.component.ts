import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  items = [
    {
      name: 'head gasket',
      price: 110,
    },
    {
      name: 'spark plug',
      price: 70,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
