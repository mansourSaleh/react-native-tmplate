
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {I18nManager} from 'react-native'
import resources from './resources'




i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: I18nManager.isRTL ? 'ar': 'en',
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n