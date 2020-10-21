import { ClockDisplayType, SettingsActionTypes, SettingsState } from './types';
import { ActionType, createReducer } from 'typesafe-actions';
import * as SettingsActions from './actions';

const generateUserName = () => `Guest ${Date.now()}`;

export const defaultSettings: SettingsState = {
  isShown: false,
  clockDisplay: ClockDisplayType.TWELVE_HOURS,
  sendByCtrlEnterKey: false,
  userName: generateUserName(),
};

const initialState: SettingsState = defaultSettings;

const settingsReducer = createReducer<
  SettingsState,
  ActionType<typeof SettingsActions>
>(initialState)
  .handleType(SettingsActionTypes.SET_SETTINGS_IS_SHOWN, (state, action) => ({
    ...state,
    isShown: action.payload,
  }))
  .handleType(SettingsActionTypes.SET_SETTINGS_SUCCESS, (state, action) => ({
    ...state,
    ...action.payload,
  }))
  .handleType(SettingsActionTypes.GET_SETTINGS_SUCCESS, (state, action) => ({
    ...state,
    ...action.payload,
  }));

export default settingsReducer;
