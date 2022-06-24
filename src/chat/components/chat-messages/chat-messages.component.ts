import { ChatMessageType } from './../../shared/chat-message-type.enum';
import { ChatMessage } from './../../shared/chat-message.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cp-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
})
export class ChatMessagesComponent implements OnInit {
  @Input() messages: ChatMessage[] = [];
  @Input() currentUser = '';

  readonly chatMessageType = ChatMessageType;

  constructor() {}

  ngOnInit() {}
}
