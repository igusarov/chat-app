import thunkMiddleware from 'redux-thunk';
import { MessagesState } from './messages/types';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import messagesReducer from './messages/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import settingsReducer from './settings/reducer';
import { SettingsState } from './settings/types';
import { SocketState } from './socket/types';
import socketReducer from './socket/reducer';

export type AppState = Readonly<{
  messages: MessagesState;
  settings: SettingsState;
  socket: SocketState;
}>;

const composedEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

const createRootReducer = () =>
  combineReducers<AppState>({
    messages: messagesReducer,
    settings: settingsReducer,
    socket: socketReducer,
  });

const store = createStore(createRootReducer(), composedEnhancers);

export default store;
