export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Royal Edition',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/pwa',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/postcss8',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios'
  ],

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true

    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US',
        name: 'English'
      },
      {
        code: 'fa',
        iso: 'fa-IR',
        file: 'fa-IR',
        name: 'Persian'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: [],
    routes: []
  },

  axios: {
    // proxy: true
  }
}