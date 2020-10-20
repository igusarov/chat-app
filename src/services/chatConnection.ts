import io from 'socket.io-client';

type MessagePayload = {
  userName: string;
  text: string;
};

class ChatConnection {
  constructor(private socketIO = io('http://localhost:3000')) {}

  public sendMessage(message: MessagePayload) {
    this.socket.emit('message', message);
  }

  public get socket() {
    return this.socketIO;
  }
}

const chatConnection = new ChatConnection();

export default chatConnection;
