import React from 'react';
import styled from 'styled-components';
import MessageForm from './MessageForm';

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
  height: 40px;
  background-color: cornflowerblue;
`;

const Content = styled.div`
  z-index: -1;
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
  return (
    <PageWrap>
      <AppWrap>
        <AppContainer>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>
            <MessageForm />
          </Footer>
        </AppContainer>
      </AppWrap>
    </PageWrap>
  );
}
