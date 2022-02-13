import { navI18nMessages } from '@/mixins/nav'
import { MagNavI18nMessages } from '@/mixins/mag/nav'

export default async () => {
  return await Promise.resolve({
    dir: 'ltr',
    welcome: 'Welcome',
    ...navI18nMessages.en,
    ...MagNavI18nMessages.en
  })
}
