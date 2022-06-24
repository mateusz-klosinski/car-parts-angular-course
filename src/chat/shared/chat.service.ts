import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChatMessage } from './chat-message.model';
import * as signalr from '@microsoft/signalr';
import { ChatMessageType } from './chat-message-type.enum';

@Injectable({ providedIn: 'root' })
export class ChatService {
  public readonly messageReceived$: Observable<ChatMessage>;
  private readonly messageReceivedSubject = new Subject<ChatMessage>();
  private readonly connection: signalr.HubConnection;
  private readonly method = 'sendToAll';

  constructor() {
    this.messageReceived$ = this.messageReceivedSubject.asObservable();
    const url = environment.baseUrl + 'chat';

    this.connection = new signalr.HubConnectionBuilder().withUrl(url).build();
    this.connection.start();

    this.connection.on(
      this.method,
      (name: string, content: string, type: ChatMessageType) => {
        this.messageReceivedSubject.next({ name, content, type });
      }
    );
  }

  sendMessage(name: string, content: string): void {
    this.connection.send(this.method, name, content, ChatMessageType.Default);
  }

  join(name: string): void {
    this.connection.send(this.method, name, null, ChatMessageType.Join);
  }

  leave(name: string): void {
    this.connection.send(this.method, name, null, ChatMessageType.Leave);
  }
}
