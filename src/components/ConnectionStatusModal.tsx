import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import styled from 'styled-components';
import { Modal } from './Modal';

const ConnectionStatus = styled.div`
  padding: 40px;
`;

const ConnectionStatusModal: FC = () => {
  const isShown = useSelector<AppState, boolean>(
    (state) => !state.socket.isConnected
  );

  return (
    isShown && (
      <Modal>
        <ConnectionStatus>Waiting for socket connection...</ConnectionStatus>
      </Modal>
    )
  );
};

export default ConnectionStatusModal;
