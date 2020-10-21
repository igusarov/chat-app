export enum ClockDisplayType {
  TWELVE_HOURS = 'TWELVE_HOURS',
  TWENTY_FOUR_HOURS = 'TWENTY_FOUR_HOURS',
}

export type Settings = {
  clockDisplay: ClockDisplayType;
  sendByCtrlEnterKey: boolean;
  userName: string;
};

type Layout = {
  isShown: boolean;
};

export enum SettingsActionTypes {
  GET_SETTINGS_SUCCESS = 'SETTINGS/GET_SETTINGS_SUCCESS',
  GET_SETTINGS_ERROR = 'SETTINGS/GET_SETTINGS_ERROR',
  SET_SETTINGS_SUCCESS = 'SETTINGS/SET_SETTINGS_SUCCESS',
  SET_SETTINGS_ERROR = 'SETTINGS/SET_SETTINGS_ERROR',
  SET_SETTINGS_IS_SHOWN = 'SETTINGS/SET_SETTINGS_IS_SHOWN',
}

export type SettingsState = Readonly<Layout & Settings>;
