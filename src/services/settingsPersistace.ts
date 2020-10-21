import { Settings } from '../store/settings/types';

const SETTINGS_KEY = 'SETTINGS_KEY';

export const save = async (settings: Settings): Promise<void> => {
  return new Promise((success, error) => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      success();
    } catch (e) {
      console.error(e);
      error(e);
    }
  });
};

export const get = async (): Promise<Settings> => {
  return new Promise((success, error) => {
    try {
      const settings: Settings = JSON.parse(localStorage.getItem(SETTINGS_KEY));
      success(settings);
    } catch (e) {
      console.error(e);
      error(e);
    }
  });
}
