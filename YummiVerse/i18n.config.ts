import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import { en } from './app/core/languages';

const resources = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  // Disabled for now
  // lng: RNLocalize.getLocales()[0].languageCode,
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
