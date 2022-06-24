import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cp-chat-info-message',
  templateUrl: './chat-info-message.component.html',
  styleUrls: ['./chat-info-message.component.scss'],
})
export class ChatInfoMessageComponent implements OnInit {
  @Input() name = '';
  @Input() isLeaving = false;

  constructor() {}

  ngOnInit() {}
}
