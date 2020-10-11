import React, { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  padding: 20px 10px;
`;
const TextField = styled.textarea`
  flex-grow: 1;
  margin-right: 5px;
`;
const Button = styled.button`
  width: 100px;
`;

type ComponentProps = {
  onSubmit: (text: string) => void;
};

const SendMessageForm: FC<ComponentProps> = (props) => {
  let textInput: HTMLTextAreaElement = null;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(textInput.value);
    props.onSubmit(textInput.value);
    textInput.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        ref={(input) => {
          textInput = input;
        }}
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default SendMessageForm;
