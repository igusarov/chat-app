import { action } from 'typesafe-actions';
import { Settings, SettingsActionTypes } from './types';

export const setIsShown = (isShown: boolean) =>
  action(SettingsActionTypes.SET_SETTINGS_IS_SHOWN, isShown);

export const setSettingsSuccess = (settings: Settings) =>
  action(SettingsActionTypes.SET_SETTINGS_SUCCESS, settings);

export const setSettingsError = () =>
  action(SettingsActionTypes.SET_SETTINGS_ERROR);

export const getSettingsSuccess = (settings: Settings) =>
  action(SettingsActionTypes.GET_SETTINGS_SUCCESS, settings);

export const getSettingsError = () =>
  action(SettingsActionTypes.GET_SETTINGS_ERROR);
