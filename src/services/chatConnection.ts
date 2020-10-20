import io from 'socket.io-client';

declare const location: Location;

type MessagePayload = {
  userName: string;
  text: string;
};

class ChatConnection {
  constructor(private socketIO = io(`http://${location.hostname}:3000`)) {}

  public sendMessage(message: MessagePayload) {
    this.socket.emit('message', message);
  }

  public get socket() {
    return this.socketIO;
  }
}

const chatConnection = new ChatConnection();

export default chatConnection;
