import Vue, { VNode } from 'vue'

function isPopup (popupItem: any, elements: any) {
  if (!popupItem || !elements) {
    return false
  }

  for (let i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch (e) {
      return false
    }
  }

  return false
}

function isServer (vNode: VNode) {
  return (
    typeof vNode.componentInstance !== 'undefined' &&
    vNode.componentInstance.$isServer
  )
}

export default Vue.extend({
  directives: {
    'outside-click': {
      bind (el: any, binding, vNode) {
        function handler (e: any) {
          if (!vNode.context) {
            return
          }

          const elements = e.path || (e.composedPath && e.composedPath())
          elements && elements.length > 0 && elements.unshift(e.target)

          if (
            el.contains(e.target) ||
            isPopup((vNode.context as any)?.popupItem, elements)
          ) {
            return
          }

          el.__vueClickOutside__.callback(e)
        }

        el.__vueClickOutside__ = {
          handler,
          callback: binding.value
        }
        const clickHandler =
          'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
        !isServer(vNode) && document.addEventListener(clickHandler, handler)
      },

      update (el: any, binding) {
        el.__vueClickOutside__.callback = binding.value
      },

      unbind (el: any, _, vNode) {
        const clickHandler =
          'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
        !isServer(vNode) &&
          el.__vueClickOutside__ &&
          document.removeEventListener(
            clickHandler,
            el.__vueClickOutside__.handler
          )
        delete el.__vueClickOutside__
      }
    }
  }
})
