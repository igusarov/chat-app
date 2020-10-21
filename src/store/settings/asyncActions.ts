import { Dispatch } from 'react';
import * as settingsPersistence from '../../services/settingsPersistace';
import * as SettingsActions from './actions';
import {
  getSettingsError,
  getSettingsSuccess,
  setSettingsError,
  setSettingsSuccess,
} from './actions';
import { ActionType } from 'typesafe-actions';
import { Settings } from './types';

export const setSettings = (settings: Settings) => async (
  dispatch: Dispatch<ActionType<typeof SettingsActions>>
): Promise<void> => {
  try {
    await settingsPersistence.save(settings);
    dispatch(setSettingsSuccess(settings));
  } catch (e) {
    dispatch(setSettingsError());
  }
};

export const getSettings = () => async (
  dispatch: Dispatch<ActionType<typeof SettingsActions>>
): Promise<void> => {
  try {
    const settings = await settingsPersistence.get();
    if (settings) {
      dispatch(getSettingsSuccess(settings));
    }
  } catch (e) {
    dispatch(getSettingsError());
  }
};
