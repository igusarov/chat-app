import { MessagesState } from './messages/types';
import { combineReducers, createStore } from 'redux';
import messagesReducer from './messages/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export type AppState = Readonly<{
  messages: MessagesState;
}>;

const createRootReducer = () =>
  combineReducers<AppState>({
    messages: messagesReducer,
  });

const store = createStore(createRootReducer(), composeWithDevTools());

export default store;
