import type { NuxtAxiosInstance } from '@nuxtjs/axios'
declare module '@nuxt/types' {
  interface Context {
    $api: NuxtAxiosInstance,
  }
}

declare module 'vue/types/vue' {
  type BreakPoints = {
    [key in 'sm' | 'md' | 'xl' | 'lg' | '2xl']: string
  }

  type BreakPointsObject = {
    [key in 'sm' | 'md' | 'xl' | 'lg' | '2xl']?: boolean
  }
  interface Vue {
    $breakPoint(breakPoints: BreakPoints): BreakPointsObject
    $hammer: HammerManager
  }
}
