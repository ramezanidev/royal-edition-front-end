import type { Plugin } from '@nuxt/types'
import Hammer from 'hammerjs'

const plugin: Plugin = (_, inject) => {
  const hammer = (...args:any) => {
    const mc = new Hammer(...args)
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
    return mc
  }
  inject('hammer', hammer)
}

export default plugin
