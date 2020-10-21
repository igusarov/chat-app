import React, { FC, SyntheticEvent } from 'react';
import ClosableWindow from './ClosableWindow';
import { Modal } from './Modal';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import * as settingsAsyncActions from '../store/settings/asyncActions';
import * as settingsActions from '../store/settings/actions';
import {
  ClockDisplayType,
  Settings as SettingsType,
} from '../store/settings/types';
import { defaultSettings } from '../store/settings/reducer';
import styled from 'styled-components';
import {
  borderColor,
  borderRadius,
  borderWidth,
  padding,
} from '../css-variables';

const Form = styled.form`
  padding: ${padding};
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px;
`;

const Section = styled.div`
  padding-bottom: 12px;
`;

const TextInput = styled.input`
  border-radius: ${borderRadius};
  border-width: ${borderWidth};
  border-color: ${borderColor};
`;

const RadioInput = styled.input`
  margin-right: 6px;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Settings: FC = () => {
  let formRef: HTMLFormElement = null;

  const dispatch = useDispatch();

  const isElevenHoursDisplaySelected = useSelector<AppState, boolean>(
    (state) => state.settings.clockDisplay === ClockDisplayType.TWELVE_HOURS
  );

  const isSendByCtrlKeySelected = useSelector<AppState, boolean>(
    (state) => state.settings.sendByCtrlEnterKey
  );

  const userName = useSelector<AppState, string>(
    (state) => state.settings.userName
  );

  const getSettings = (): SettingsType => {
    const formData = new FormData(formRef);
    return {
      clockDisplay: formData.get('clock-display') as ClockDisplayType,
      sendByCtrlEnterKey: formData.get('ctrl-enter-keys') === 'true',
      userName: formData.get('user-name') as string,
    };
  };

  const handleFormChange = () => {
    dispatch(settingsAsyncActions.setSettings(getSettings()));
  };

  const handleResetToDefault = (event: SyntheticEvent) => {
    event.preventDefault();
    const { sendByCtrlEnterKey, clockDisplay, userName } = defaultSettings;
    dispatch(
      settingsAsyncActions.setSettings({
        sendByCtrlEnterKey,
        clockDisplay,
        userName,
      })
    );
  };

  return (
    <Form ref={(element) => (formRef = element)} onChange={handleFormChange}>
      <Section>
        <Label htmlFor="user-name">User name</Label>
        <TextInput
          type="text"
          id="user-name"
          name="user-name"
          value={userName}
          onChange={handleFormChange}
        />
      </Section>
      <Section>
        <SectionTitle>Clock Display</SectionTitle>
        <Label htmlFor="12-hours">12 hours</Label>
        <RadioInput
          type="radio"
          id="12-hours"
          name="clock-display"
          value={ClockDisplayType.TWELVE_HOURS}
          readOnly
          checked={isElevenHoursDisplaySelected}
        />
        <Label htmlFor="24-hours">24 hours</Label>
        <RadioInput
          type="radio"
          id="24-hours"
          name="clock-display"
          value={ClockDisplayType.TWENTY_FOUR_HOURS}
          readOnly
          checked={!isElevenHoursDisplaySelected}
        />
      </Section>
      <Section>
        <SectionTitle>Send message on Ctrl/Cmd + Enter</SectionTitle>
        <Label htmlFor="on">On</Label>
        <RadioInput
          type="radio"
          id="on"
          value="true"
          name="ctrl-enter-keys"
          readOnly
          checked={isSendByCtrlKeySelected}
        />
        <Label htmlFor="off">Off</Label>
        <RadioInput
          type="radio"
          id="off"
          value="false"
          name="ctrl-enter-keys"
          readOnly
          checked={!isSendByCtrlKeySelected}
        />
      </Section>
      <Button onClick={handleResetToDefault}>Reset to default</Button>
    </Form>
  );
};

const SettingsModal: FC = () => {
  const dispatch = useDispatch();

  const isShown = useSelector<AppState, boolean>(
    (state) => state.settings.isShown
  );

  return (
    isShown && (
      <Modal>
        <ClosableWindow
          onClose={() => {
            dispatch(settingsActions.setIsShown(false));
          }}
        >
          <Settings />
        </ClosableWindow>
      </Modal>
    )
  );
};

export default SettingsModal;
