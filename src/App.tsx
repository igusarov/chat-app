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
import { getSettings } from './store/settings/asyncActions';
import { setIsConnected } from './store/socket/actions';
import ConnectionStatusModal from './components/ConnectionStatusModal';

const { socket } = chatConnection;

const App: React.FC = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(getSettings());
    socket.on('message', handleNewMessage);
    socket.on('connect', handleSocketConnected);
    socket.on('disconnect', handleSocketDisconnected);
    if (socket.connected) {
      handleSocketConnected();
    }
  }, []);

  const handleNewMessage = (message: Message) => {
    dispatch(addMessage(message));
  };

  const handleSocketConnected = () => {
    dispatch(setIsConnected(true));
  };

  const handleSocketDisconnected = () => {
    dispatch(setIsConnected(false));
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
      <ConnectionStatusModal />
    </Container>
  );
};

export default App;
