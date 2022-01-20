import type { Plugin } from '@nuxt/types'

const plugin: Plugin = (ctx, inject) => {
  const api = ctx.$axios.create({
    headers: {
      common: {
        Accept: 'application/json'
      },
      lang: ctx.i18n.locale
    }
  })
  api.setBaseURL(ctx.env.BASE_URL)

  inject('api', api)
}

export default plugin
