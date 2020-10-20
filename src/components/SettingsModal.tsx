import React, { FC, SyntheticEvent } from 'react';
import ClosableWindow from './ClosableWindow';
import { Modal } from './Modal';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import * as settingsActions from '../store/settings/actions';
import {
  ClockDisplayType,
  Settings as SettingsType,
} from '../store/settings/types';
import { defaultSettings } from '../store/settings/reducer';

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
    dispatch(settingsActions.setSettings(getSettings()));
  };

  const handleResetToDefault = (event: SyntheticEvent) => {
    event.preventDefault();
    const { sendByCtrlEnterKey, clockDisplay, userName } = defaultSettings;
    dispatch(
      settingsActions.setSettings({
        sendByCtrlEnterKey,
        clockDisplay,
        userName,
      })
    );
  };

  return (
    <form ref={(element) => (formRef = element)} onChange={handleFormChange}>
      <div>
        <label htmlFor="user-name">User name</label>
        <input
          type="text"
          id="user-name"
          name="user-name"
          value={userName}
          onChange={handleFormChange}
        />
        <p>Clock Display</p>
        <label htmlFor="12-hours">12 hours</label>
        <input
          type="radio"
          id="12-hours"
          name="clock-display"
          value={ClockDisplayType.TWELVE_HOURS}
          readOnly
          checked={isElevenHoursDisplaySelected}
        />
        <label htmlFor="24-hours">24 hours</label>
        <input
          type="radio"
          id="24-hours"
          name="clock-display"
          value={ClockDisplayType.TWENTY_FOUR_HOURS}
          readOnly
          checked={!isElevenHoursDisplaySelected}
        />
      </div>
      <div>
        <p>Send message on Ctrl/Cmd + Enter</p>
        <label htmlFor="on">On</label>
        <input
          type="radio"
          id="on"
          value="true"
          name="ctrl-enter-keys"
          readOnly
          checked={isSendByCtrlKeySelected}
        />
        <label htmlFor="off">Off</label>
        <input
          type="radio"
          id="off"
          value="false"
          name="ctrl-enter-keys"
          readOnly
          checked={!isSendByCtrlKeySelected}
        />
      </div>
      <Button onClick={handleResetToDefault}>Reset to default</Button>
    </form>
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
