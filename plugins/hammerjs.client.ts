import type { Plugin } from '@nuxt/types'
import Hammer from 'hammerjs'

const plugin: Plugin = (_, inject) => {
  const hammer = (
    element: HTMLElement | SVGElement,
    options?: HammerOptions | undefined
  ): HammerManager => {
    const mc = new Hammer(element, options)
    mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL })
    return mc
  }
  inject('hammer', hammer)
}

export default plugin
