import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatInfoMessageComponent } from './components/chat-info-message/chat-info-message.component';
import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './containers/chat/chat.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrimengModule, FormsModule],
  declarations: [
    ChatComponent,
    ChatInfoMessageComponent,
    ChatMessageComponent,
    ChatInputComponent,
    ChatMessagesComponent,
  ],
  exports: [ChatComponent],
})
export class ChatModule {}
