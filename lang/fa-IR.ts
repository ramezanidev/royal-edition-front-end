import { navI18nMessages } from '@/mixins/nav'
import { MagNavI18nMessages } from '@/mixins/mag/nav'

export default async () => {
  return await Promise.resolve({
    dir: 'rtl',
    welcome: 'سلام',
    ...navI18nMessages.fa,
    ...MagNavI18nMessages.fa
  })
}
