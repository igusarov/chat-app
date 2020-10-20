export type Message = {
  userName: string;
  dateTime: string;
  text: string;
};

export enum MessagesActionTypes {
  ADD_MESSAGE = 'MESSAGES/ADD_MESSAGE',
}

export type MessagesState = Readonly<Message[]>;
