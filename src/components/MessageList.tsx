import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { Message } from '../store/messages/types';
import * as moment from 'moment';
import { createSelector } from 'reselect';

const getUser = (state: AppState): string => state.settings.userName;
const getMessages = (state: AppState): Message[] => state.messages as Message[];

const getComponentMessages = createSelector<
  AppState,
  string,
  Message[],
  ComponentMessage[]
>(
  getUser,
  getMessages,
  (user: string, messages: Message[]): ComponentMessage[] => {
    return messages.map((item) => ({
      ...item,
      isUserOwn: item.userName === user,
      isImage: /\.(jpg|jpeg|png|gif)$/i.test(item.text),
    }));
  }
);

type ComponentMessage = {
  isUserOwn: boolean;
  isImage: boolean;
} & Message;

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
  justify-content: ${({ isUserOwn }) =>
    isUserOwn ? 'flex-end' : 'flex-start'};
`;

const MessageBlock = styled.div``;

const MessageWrap = styled.div<ComponentProps>`
  background-color: ${({ isUserOwn }) => (isUserOwn ? 'red' : 'green')};
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const MessageImage = styled.img`
  height: 50px;
`;

const MessageList: FC = () => {
  const items = useSelector<AppState, ComponentMessage[]>(getComponentMessages);

  const dateFormat = (date: string): string => {
    return moment(date).format('HH:mm');
  };

  return (
    <List>
      {items.map(({ isUserOwn, dateTime, text, userName, isImage }) => (
        <MessageContainer isUserOwn={isUserOwn} key={dateTime}>
          <MessageBlock>
            {userName} {dateFormat(dateTime)}
            <MessageWrap isUserOwn={isUserOwn}>
              {isImage ? <MessageImage src={text} /> : text}
            </MessageWrap>
          </MessageBlock>
        </MessageContainer>
      ))}
    </List>
  );
};

export default MessageList;
