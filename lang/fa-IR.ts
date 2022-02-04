import { navI18nMessages } from '@/mixins/nav'

export default async () => {
  return await Promise.resolve({
    dir: 'rtl',
    welcome: 'سلام',
    ...navI18nMessages.fa
  })
}
