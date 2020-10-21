import thunkMiddleware from 'redux-thunk';
import { MessagesState } from './messages/types';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import messagesReducer from './messages/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import settingsReducer from './settings/reducer';
import { SettingsState } from './settings/types';

export type AppState = Readonly<{
  messages: MessagesState;
  settings: SettingsState;
}>;

const composedEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

const createRootReducer = () =>
  combineReducers<AppState>({
    messages: messagesReducer,
    settings: settingsReducer,
  });

const store = createStore(createRootReducer(), composedEnhancers);

export default store;
