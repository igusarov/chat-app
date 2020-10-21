import React, { FC, SyntheticEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from './Button';
import chatConnection from '../services/chatConnection';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import {
  borderColor,
  borderRadius,
  borderWidth,
  padding,
} from '../css-variables';

const Form = styled.form`
  align-items: center;
  height: 100%;
  display: flex;
  padding: 0 ${padding};
`;
const TextField = styled.textarea`
  height: 40px;
  flex-grow: 1;
  margin-right: 5px;
  border-radius: ${borderRadius};
  border-width: ${borderWidth};
  border-color: ${borderColor};
`;

const SendButton = styled(Button)`
  height: 40px;
  width: 100px;
`;

const SendMessageForm: FC = () => {
  const textInput = useRef<HTMLTextAreaElement>(null);

  const userName = useSelector<AppState, string>(
    (state) => state.settings.userName
  );

  const isSendByCtrlEnterKeySelected = useSelector<AppState, boolean>(
    (state) => state.settings.sendByCtrlEnterKey
  );

  useEffect(() => {
    textInput.current.addEventListener('keypress', handleKeyPress);
    return () => {
      textInput.current.removeEventListener('keypress', handleKeyPress);
    };
  }, [isSendByCtrlEnterKeySelected, userName]);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      if (
        (isSendByCtrlEnterKeySelected && event.ctrlKey) ||
        (!isSendByCtrlEnterKeySelected && !event.ctrlKey)
      ) {
        event.preventDefault();
        sendMessage();
      }
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    sendMessage();
  };

  const sendMessage = () => {
    chatConnection.sendMessage({
      userName,
      text: textInput.current.value,
    });
    textInput.current.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField ref={textInput} />
      <SendButton type="submit">Send</SendButton>
    </Form>
  );
};

export default SendMessageForm;
