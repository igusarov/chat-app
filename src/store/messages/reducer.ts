import { MessagesActionTypes, MessagesState } from './types';
import { ActionType, createReducer } from 'typesafe-actions';
import * as MessagesActions from './actions';

const initialState: MessagesState = [];

const messageReducer = createReducer<
  MessagesState,
  ActionType<typeof MessagesActions>
>(initialState).handleType(MessagesActionTypes.ADD_MESSAGE, (state, action) => [
  ...state,
  action.payload,
]);

export default messageReducer;
