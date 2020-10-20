import React, { useLayoutEffect } from 'react';
import SendMessageForm from './components/SendMessageForm';
import MessageList from './components/MessageList';
import { useDispatch } from 'react-redux';
import { addMessage } from './store/messages/actions';
import { Message } from './store/messages/types';
import { Container, Content, Footer, Header } from './components/Layout';
import SettingsModal from './components/SettingsModal';
import NavBar from './components/NavBar';
import chatConnection from './services/chatConnection';

const { socket } = chatConnection;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    socket.on('message', handleNewMessage);
  }, []);

  const handleNewMessage = (message: Message) => {
    dispatch(addMessage(message));
  };

  return (
    <Container>
      <Header>
        <NavBar />
      </Header>
      <Content>
        <MessageList />
      </Content>
      <Footer>
        <SendMessageForm />
      </Footer>
      <SettingsModal />
    </Container>
  );
};

export default App;
