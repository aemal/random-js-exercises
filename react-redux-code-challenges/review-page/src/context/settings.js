import { createContext } from 'react'

export const settings = {
    dateFormat: "DD.MM.YYYY"
  };

export const SettingsContext = createContext(settings);
