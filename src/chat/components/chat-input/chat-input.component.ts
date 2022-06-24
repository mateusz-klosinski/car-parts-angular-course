import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cp-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {
  @Output() readonly sendMessageClicked = new EventEmitter<string>();

  message = '';

  constructor() {}

  ngOnInit() {}

  onSendMessageClicked(): void {
    this.sendMessageClicked.emit(this.message);
    this.message = '';
  }
}
