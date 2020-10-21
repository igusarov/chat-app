export enum SocketActionTypes {
  SET_IS_CONNECTED = 'SOCKET/SET_IS_CONNECTED',
}

export type Socket = {
  isConnected: boolean;
};

export type SocketState = Readonly<Socket>;
