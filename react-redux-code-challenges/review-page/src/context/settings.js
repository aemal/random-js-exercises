import { createContext } from 'react'

export const settings = {
    dateFormat: "MM.DD.YYYY"
  };

export const SettingsContext = createContext(settings);
