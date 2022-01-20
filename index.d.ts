import type { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module '@nuxt/types' {
  interface Context {
    $api: NuxtAxiosInstance
  }
}
