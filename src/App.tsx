import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SendMessageForm from './components/SendMessageForm';
import MessageList from './components/MessageList';
import { useDispatch } from 'react-redux';
import { addMessage } from './store/messages/actions';
import { MessageType } from './store/messages/types';

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
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
      socket.on('message', handleNewMessage);
    });
  }, []);

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
    <PageWrap>
      <AppWrap>
        <AppContainer>
          <Header>header</Header>
          <Content>
            <MessageList />
          </Content>
          <Footer>
            <SendMessageForm onSubmit={handleSubmit} />
          </Footer>
        </AppContainer>
      </AppWrap>
    </PageWrap>
  );
}
