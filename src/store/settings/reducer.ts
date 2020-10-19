import { ClockDisplayType, SettingsActionTypes, SettingsState } from './types';
import { ActionType, createReducer } from 'typesafe-actions';
import * as SettingsActions from './actions';

export const defaultSettings: SettingsState = {
  isShown: false,
  clockDisplay: ClockDisplayType.ELEVEN_HOURS,
  sendByCtrlEnterKey: false,
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
  .handleType(SettingsActionTypes.SET_SETTINGS, (state, action) => ({
    ...state,
    ...action.payload,
  }));

export default settingsReducer;
