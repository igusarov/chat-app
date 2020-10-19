import React, { useLayoutEffect } from 'react';
import SendMessageForm from './components/SendMessageForm';
import MessageList from './components/MessageList';
import { useDispatch } from 'react-redux';
import { addMessage } from './store/messages/actions';
import { MessageType } from './store/messages/types';
import { Container, Content, Footer, Header } from './components/Layout';
import io from 'socket.io-client';
import SettingsModal from './components/SettingsModal';

const socket = io('http://localhost:3000');

const App: React.FC = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (socket.connected) {
      handleSocketConnected();
    } else {
      socket.on('connect', handleSocketConnected);
    }
  }, []);

  const handleSocketConnected = () => {
    socket.on('message', handleNewMessage);
  };

  const handleNewMessage = ({ text }: { text: string }) => {
    dispatch(
      addMessage({
        userName: 'ilya',
        type: MessageType.TEXT,
        dateTime: '23422342',
        data: text,
      })
    );
  };

  const handleSubmit = (text: string) => {
    socket.emit('message', { text });
  };

  return (
    <Container>
      <Header>header</Header>
      <Content>
        <MessageList />
      </Content>
      <Footer>
        <SendMessageForm onSubmit={handleSubmit} />
      </Footer>
      <SettingsModal />
    </Container>
  );
};

export default App;
