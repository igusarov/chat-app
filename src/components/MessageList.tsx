import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { Message } from '../store/messages/types';
import * as moment from 'moment';
import { createSelector } from 'reselect';
import { ClockDisplayType } from '../store/settings/types';
import { padding } from '../css-variables';

const dateFormat = (date: string, displayType: ClockDisplayType): string => {
  const template =
    displayType === ClockDisplayType.TWENTY_FOUR_HOURS ? 'HH:mm' : 'hh:mm A';
  return moment(date).format(template);
};

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
  background-color: #ebecec;
  padding: ${padding};
`;

const MessageContainer = styled.div<ComponentProps>`
  display: flex;
  justify-content: ${({ isUserOwn }) =>
    isUserOwn ? 'flex-end' : 'flex-start'};
`;

const MessageBlock = styled.div`
  flex-basis: 300px;
`;

const MessageInfo = styled.div<ComponentProps>`
  color: ${({ isUserOwn }) => (isUserOwn ? 'grey' : '#b74747')};
  margin-left: 6px;
  margin-bottom: 3px;
  font-style: italic;
  font-size: 12px;
  font-weight: bold;
}
`;

const MessageWrap = styled.div<ComponentProps>`
  background-color: ${({ isUserOwn }) => (isUserOwn ? '#9fc9e6' : '#ffc3c3')};
  color: #646464;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const MessageImage = styled.img`
  height: 50px;
`;

const MessageList: FC = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const items = useSelector<AppState, ComponentMessage[]>(getComponentMessages);
  const displayType = useSelector<AppState, ClockDisplayType>(
    (state) => state.settings.clockDisplay
  );

  useEffect(() => {
    listRef.current.scrollTo(0, listRef.current.scrollHeight);
  }, [items, displayType]);

  return (
    <List ref={listRef}>
      {items.map(({ isUserOwn, dateTime, text, userName, isImage }) => (
        <MessageContainer isUserOwn={isUserOwn} key={dateTime}>
          <MessageBlock>
            <MessageInfo isUserOwn={isUserOwn}>
              {userName} {dateFormat(dateTime, displayType)}
            </MessageInfo>
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
