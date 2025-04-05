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
export const defaultNS = 'ns1'

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources,
    lng: 'en',
    ns: [ 'ns1' ],
    defaultNS,
    interpolation: {
      escapeValue: false // react is already safe from xss
    }
  })

// eslint-disable-next-line unicorn/prefer-export-from
export default i18n
