import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/locales/en.json'
import bg from '@/locales/bg.json'


export const resources = {
  en: {
    translation: en
  },
  bg: {
    translation: bg
  }
} as const
export const defaultNS = 'translation'

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources, // Locale files loaded here
    lng: 'en',
    fallbackLng: 'en',
    ns: 'translation',
    defaultNS,
    fallbackNS: defaultNS,
    interpolation: {
      escapeValue: false // react is already safe from xss
    }
  })

// eslint-disable-next-line unicorn/prefer-export-from
export default i18n
