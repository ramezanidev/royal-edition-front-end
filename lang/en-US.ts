import { navI18nMessages } from '@/mixins/nav'

export default async () => {
  return await Promise.resolve({
    dir: 'ltr',
    welcome: 'Welcome',
    ...navI18nMessages.en
  })
}
