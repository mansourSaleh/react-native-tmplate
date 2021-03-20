
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {I18nManager} from 'react-native'



const resources = {
    en: {
      translation: {
        "Welcome to React": "Welcome to React and react-i18next",
        "hello_word": "Hi"
      }
    },
    ar: {
        translation: {
            "hello_word": "سلام"
        }
    }
  };

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