import * as React from 'react';
import styled from 'styled-components';

const List = styled.div`
  height: 100%;
  flex-direction: row;
  overflow: auto;
`;

const MessageContainer = styled.div<any>`
  display: flex;
  justify-content: ${(props: any) =>
    props.isUserOwn ? 'flex-end' : 'flex-start'};
`;

const Message = styled.div<any>`
  background-color: ${(props: any) => (props.isUserOwn ? 'red' : 'green')};
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export default function MessageList(props: any) {
  return (
    <List>
      {props.items.map((item: any) => (
        <MessageContainer isUserOwn={item.isUserOwn} key={item.id}>
          <Message isUserOwn={item.isUserOwn}>{item.text}</Message>
        </MessageContainer>
      ))}
    </List>
  );
}
