import type { Plugin } from '@nuxt/types'

const plugin: Plugin = ({ app, redirect }) => {
  const locale = app.$cookiz.get('lang')
  if (locale && locale !== app.i18n.locale) {
    redirect(app.switchLocalePath(locale)) // setLocal user browser cookies
  }

  app.i18n.onBeforeLanguageSwitch = (_, newLang) => {
    app.$cookiz.set('lang', newLang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365 // 1 year
    })
  }
}

export default plugin
