import React, { FC } from 'react';
import ClosableWindow from './ClosableWindow';
import { Modal } from './Modal';
import Button from './Button';

const Settings: FC = () => {
  return (
    <form>
      <div>
        <p>Clock Display</p>
        <label htmlFor="12-hours">12 hours</label>
        <input type="radio" id="12-hours" name="clock-display" />
        <label htmlFor="24-hours">24 hours</label>
        <input type="radio" id="24-hours" name="clock-display" />
      </div>
      <div>
        <p>Send message on Ctrl/Cmd + Enter</p>
        <label htmlFor="on">On</label>
        <input type="radio" id="on" name="ctrl-enter-keys" />
        <label htmlFor="off">Off</label>
        <input type="radio" id="off" name="ctrl-enter-keys" />
      </div>
      <Button>Reset to default</Button>
    </form>
  );
};

const SettingsModal: FC = () => {
  return (
    <Modal>
      <ClosableWindow
        onClose={() => {
          console.log('close');
        }}
      >
        <Settings />
      </ClosableWindow>
    </Modal>
  );
};

export default SettingsModal;
