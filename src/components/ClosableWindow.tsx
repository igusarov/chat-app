import React, { FC } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CloseIcon from '../assets/close-button.svg';

type ComponentProps = {
  onClose: () => void;
};

const Container = styled.div`
  padding-top: 30px;
  position: relative;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const ClosableWindow: FC<ComponentProps> = ({ onClose, children }) => {
  return (
    <Container>
      <CloseButton onClick={onClose} src={CloseIcon} />
      {children}
    </Container>
  );
};

export default ClosableWindow;
