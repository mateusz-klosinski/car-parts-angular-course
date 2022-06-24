import { takeUntil } from 'rxjs/operators';
import { ChatService } from './../../shared/chat.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ChatMessage } from 'src/chat/shared/chat-message.model';
import { Subject } from 'rxjs';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'cp-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild(OverlayPanel) panel!: OverlayPanel;

  messages: ChatMessage[] = [];
  username = '';
  isUsernameDialogVisible = false;

  private readonly unsubscribe = new Subject<void>();

  constructor(private readonly chatService: ChatService) {}

  ngOnInit() {
    this.chatService.messageReceived$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((message) => this.messages.push(message));
  }

  sendMessage(content: string): void {
    this.chatService.sendMessage(this.username, content);
  }

  chatShown(): void {
    this.chatService.join(this.username);
  }

  chatHide(): void {
    this.chatService.leave(this.username);
  }

  confirmUsername(): void {
    this.isUsernameDialogVisible = false;
  }

  toggleChat(event: MouseEvent): void {
    if (!this.username) {
      this.isUsernameDialogVisible = true;
      return;
    }

    this.panel.toggle(event);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
