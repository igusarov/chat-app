import React, { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';
import Button from './Button';
import chatConnection from '../services/chatConnection';
import { useSelector } from 'react-redux';
import { AppState } from '../store';

const Form = styled.form`
  display: flex;
  padding: 20px 10px;
`;
const TextField = styled.textarea`
  flex-grow: 1;
  margin-right: 5px;
`;

const SendButton = styled(Button)`
  width: 100px;
`;

const SendMessageForm: FC = () => {
  let textInput: HTMLTextAreaElement = null;

  const userName = useSelector<AppState, string>(
    (state) => state.settings.userName
  );

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    chatConnection.sendMessage({
      userName,
      text: textInput.value,
    });
    textInput.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        ref={(input) => {
          textInput = input;
        }}
      />
      <SendButton type="submit">Send</SendButton>
    </Form>
  );
};

export default SendMessageForm;
