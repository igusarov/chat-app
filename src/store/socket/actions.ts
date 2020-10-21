import { action } from 'typesafe-actions';
import { SocketActionTypes } from '../socket/types';

export const setIsConnected = (isConnected: boolean) =>
  action(SocketActionTypes.SET_IS_CONNECTED, isConnected);
