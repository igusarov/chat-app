import styled from 'styled-components';
import React, { FC } from 'react';

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

export const Container: FC = ({ children }) => {
  return (
    <PageWrap>
      <AppWrap>
        <AppContainer>{children}</AppContainer>
      </AppWrap>
    </PageWrap>
  );
};

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 40px;
  background-color: cornflowerblue;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  background: powderblue;
  height: 100%;
  padding: 40px 0 80px 0;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 80px;
  background: cornflowerblue;
  width: 100%;
`;
