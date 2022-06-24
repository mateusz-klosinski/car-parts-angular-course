import { ChatMessageType } from './chat-message-type.enum';

export interface ChatMessage {
  readonly name: string;
  readonly content: string;
  readonly type: ChatMessageType;
}
