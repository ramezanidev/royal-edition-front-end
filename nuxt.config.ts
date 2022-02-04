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
    '@/assets/css/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/api',
    './plugins/hammerjs.client.ts',
    './plugins/breakpoint.client.ts',
    './plugins/i18n.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/pwa',

    '@nuxtjs/dotenv',
    [
      '@nuxtjs/eslint-module',
      {
        fix: true
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/postcss8',
    '@nuxtjs/sitemap',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    '@nuxtjs/axios',
    [
      'nuxt-perfect-cache',
      {
        disable: true, // disabled in develop
        appendHost: true,
        ignoreConnectionErrors: true,
        prefix: 'r-',
        url: process.env.REDIS,
        getCacheData (route:string) {
          return ({
            key: `page-${route}`,
            expire: 60 /* seconds */
          })
        }
      }
    ]

  ],

  i18n: {
    detectBrowserLanguage: false,
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
    langDir: 'lang/',
    defaultLocale: 'fa',
    vueI18nLoader: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: [],
    routes: []
  },

  axios: {
    // proxy: true
  },

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },

  pwa: {
    manifest: {
      name: 'Coilaco',
      short_name: 'Coilaco',
      lang: 'fa',
      background_color: '#1B262C',
      useWebmanifestExtension: false
    },
    meta: {
      theme_color: '#1B262C'
    }
  }
}
