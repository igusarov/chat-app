import React, { FC } from 'react';
import styled from 'styled-components';
import { modalMaxWidth, primaryColor } from '../css-variables';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const Content = styled.div`
  max-height: 300px;
  max-width: ${modalMaxWidth};
  background-color: ${primaryColor};
  border-radius: 5px;
`;

export const Modal: FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};
