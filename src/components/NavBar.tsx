import styled from 'styled-components';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import * as settingsActions from '../store/settings/actions';
import { padding } from '../css-variables';

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Title = styled.div`
  height: 18px;
  text-overflow: ellipsis;
  padding: 0 65px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
`;

const SettingsButton = styled.div`
  text-decoration-style: dotted;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${padding};
  text-decoration: underline;
  text-decoration-style: dotted;
`;

const NavBar: FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Chat app</Title>
      <SettingsButton
        onClick={() => dispatch(settingsActions.setIsShown(true))}
      >
        Settings
      </SettingsButton>
    </Container>
  );
};

export default NavBar;
