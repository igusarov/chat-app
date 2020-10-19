import { MessagesState } from './messages/types';
import { combineReducers, createStore } from 'redux';
import messagesReducer from './messages/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import settingsReducer from './settings/reducer';
import { SettingsState } from './settings/types';

export type AppState = Readonly<{
  messages: MessagesState;
  settings: SettingsState;
}>;

const createRootReducer = () =>
  combineReducers<AppState>({
    messages: messagesReducer,
    settings: settingsReducer,
  });

const store = createStore(createRootReducer(), composeWithDevTools());

export default store;
