import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cp-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {
  @Input() name = '';
  @Input() content = '';
  @Input() @HostBinding('class.current-user') isFromCurrentUser = false;

  constructor() {}

  ngOnInit() {}
}
