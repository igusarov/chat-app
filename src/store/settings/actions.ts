import { action } from 'typesafe-actions';
import { Settings, SettingsActionTypes } from './types';

export const setIsShown = (isShown: boolean) =>
  action(SettingsActionTypes.SET_SETTINGS_IS_SHOWN, isShown);

export const setSettings = (settings: Settings) =>
  action(SettingsActionTypes.SET_SETTINGS, settings);
