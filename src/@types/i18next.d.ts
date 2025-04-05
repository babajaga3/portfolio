import { resources, defaultNS } from '@/lib/i18next'


declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: {
      translation: typeof resources['en']['translation']
    }
  }
}
