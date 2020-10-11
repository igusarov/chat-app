import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { Message } from '../store/messages/types';

type ComponentProps = {
  isUserOwn: boolean;
};

const List = styled.div`
  height: 100%;
  flex-direction: row;
  overflow: auto;
`;

const MessageContainer = styled.div<ComponentProps>`
  display: flex;
  justify-content: ${(props: ComponentProps) =>
    props.isUserOwn ? 'flex-end' : 'flex-start'};
`;

const MessageBlock = styled.div<ComponentProps>`
  background-color: ${(props: ComponentProps) =>
    props.isUserOwn ? 'red' : 'green'};
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const MessageList: FC = () => {
  const items = useSelector<AppState, Message[]>(
    (state) => state.messages as Message[]
  );

  return (
    <List>
      {items.map((item) => (
        <MessageContainer isUserOwn={true} key={item.data}>
          <MessageBlock isUserOwn={true}>{item.data}</MessageBlock>
        </MessageContainer>
      ))}
    </List>
  );
};

export default MessageList;
