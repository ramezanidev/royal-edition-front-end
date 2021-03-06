import Vue from 'vue'

import type { Plugin } from '@nuxt/types'

type BreakPoints = {
  [key in 'sm' | 'md' | 'xl' | 'lg' | '2xl']: string;
};

type BreakPointsObject = {
  [key in 'sm' | 'md' | 'xl' | 'lg' | '2xl' | string]?: boolean;
};

const plugin: Plugin = (_, inject) => {
  const breakPoint = (breakPoints: BreakPoints) => {
    const obj: BreakPointsObject = Vue.observable({})
    for (const [key, value] of Object.entries(breakPoints)) {
      const media = window.matchMedia(`(min-width: ${value})`)
      Vue.set(obj, key, media.matches)
      media.onchange = ({ matches }) => Vue.set(obj, key, matches)
    }
    return obj
  }
  inject('breakPoint', breakPoint)
}

export default plugin
