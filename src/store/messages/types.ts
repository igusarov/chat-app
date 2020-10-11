export enum MessageType {
  TEXT = 0,
  URL = 1,
}

export type Message = {
  userName: string;
  type: MessageType;
  dateTime: string;
  data: string;
};

export enum MessagesActionTypes {
  ADD_MESSAGE = 'MESSAGES/ADD_MESSAGE',
}

export type MessagesState = Readonly<Message[]>;
