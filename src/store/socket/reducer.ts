import { SocketActionTypes, SocketState } from './types';
import { ActionType, createReducer } from 'typesafe-actions';
import * as SocketActions from './actions';

export const defaultSocket: SocketState = {
  isConnected: false,
};

const initialState: SocketState = defaultSocket;

const socketReducer = createReducer<
  SocketState,
  ActionType<typeof SocketActions>
>(initialState).handleType(
  SocketActionTypes.SET_IS_CONNECTED,
  (state, action) => ({
    ...state,
    isConnected: action.payload,
  })
);

export default socketReducer;
