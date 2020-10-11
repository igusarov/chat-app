import { action } from 'typesafe-actions';
import { Message, MessagesActionTypes } from './types';

export const addMessage = (message: Message) =>
  action(MessagesActionTypes.ADD_MESSAGE, message);
