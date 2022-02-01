import type { Plugin } from '@nuxt/types'

const plugin: Plugin = ({ app }) => {
  const locale = app.$cookiz.get('lang') || app.i18n.defaultLocale
  app.i18n.setLocale(locale) // setLocal user browser cookies

  app.i18n.onBeforeLanguageSwitch = (_, newLang) => {
    app.$cookiz.set('lang', newLang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365 // 1 year
    })
  }
}

export default plugin
