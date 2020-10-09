import React, { useLayoutEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

declare const socket: any;

const PageWrap = styled.div`
  height: 100%;
`;

const AppWrap = styled.div`
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const AppContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 40px;
  background-color: cornflowerblue;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  background: powderblue;
  height: 100%;
  padding: 40px 0 80px 0;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 80px;
  background: cornflowerblue;
  width: 100%;
`;

export default function App() {
  const [messages, setMessages] = useState([]);
  const massagesStateRef = useRef<any>();
  massagesStateRef.current = messages;

  useLayoutEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
      socket.on('message', handleNewMessage);
    });
  }, []);

  let ids = 0;

  const handleNewMessage = ({ text }: { text: string }) => {
    setMessages([
      ...massagesStateRef.current,
      {
        id: ids++,
        isUserOwn: true,
        text,
      },
    ]);
  };

  const handleSubmit = (text: string) => {
    socket.emit('message', { text });
  };
  return (
    <PageWrap>
      <AppWrap>
        <AppContainer>
          <Header>header</Header>
          <Content>
            <MessageList items={messages} />
          </Content>
          <Footer>
            <MessageForm onSubmit={handleSubmit} />
          </Footer>
        </AppContainer>
      </AppWrap>
    </PageWrap>
  );
}
