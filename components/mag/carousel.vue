<template>
  <div
    ref="carousel"
    class="!!touch-pan-y relative h-[calc(100vh-4rem)] w-full overflow-hidden"
  >
    <ul class="absolute flex h-full will-change-[left]">
      <li
        v-for="i in 10"
        :key="i"
        class="relative h-full w-full bg-[url(https://noonpost.oonio.ir/html/template/assets/img/hero/3.jpg)] bg-cover bg-center"
      >
        <!-- content -->
        <div
          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25"
        >
          <div
            class="flex w-full flex-col items-center space-y-6 px-2 md:space-y-8"
          >
            <span
              class="cursor-pointer select-none rounded-full bg-brand-mag-4 px-3 py-1 text-xs font-bold text-white transition-colors duration-500 hover:bg-brand-mag-1"
            >شخصی {{ i }}</span>
            <h1 class="text-xl font-bold text-white sm:text-2xl lg:text-[32px]">
              بهترین و زیباترین مکان های دیدنی
            </h1>
            <div class="-mt-2 flex items-center">
              <span
                class="select-none text-xs font-bold text-brand-mag-5 transition-colors group-hover:text-brand-mag-4 dark:text-brand-mag-3"
              >فلانی فلانی نسب</span>
              <!-- dot -->
              <span class="mx-4 flex h-1.5 w-1.5 rounded-full bg-brand-mag-4" />
              <!-- date -->
              <p
                class="select-none text-xs font-bold text-brand-mag-5 dark:text-brand-mag-3"
              >
                24 بهمن 1400
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- controler -->
    <button class="absolute top-1/2 right-3 z-[1] px-1" @click="carousel.next">
      <svg
        class="w-4"
        viewBox="0 0 18 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3536 14.5592C17.3033 15.6788 17.3033 17.3212 16.3536 18.4408L5.28768 31.4847C3.48098 33.6144 0 32.3368 0 29.544L0 3.45601C0 0.663224 3.48098 -0.614399 5.28768 1.51526L16.3536 14.5592Z"
          fill="#fff"
        />
      </svg>
    </button>
    <button class="absolute top-1/2 left-3 z-[1] px-1" @click="carousel.prev">
      <svg
        class="w-4"
        viewBox="0 0 18 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.64644 18.4408C0.696679 17.3212 0.696679 15.6788 1.64644 14.5592L12.7123 1.51527C14.519 -0.614395 18 0.663239 18 3.45602L18 29.544C18 32.3368 14.519 33.6144 12.7123 31.4847L1.64644 18.4408Z"
          fill="#fff"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    carousel: {
      prev: () => {},
      next: () => {}
    },
    eventListeners: {}
  }),
  computed: {
    direction () {
      return this.$i18n.t('dir')
    }
  },
  mounted () {
    function Carousel (selector) {
      const self = this
      const carousel = selector
      const container = selector.querySelector('ul')
      const panes = Array.from(selector.querySelectorAll('li'))

      let paneWidth = 0
      const paneCount = panes.length
      const panBoundary = 0.25

      let currentPane = 0

      function setPaneSize () {
        paneWidth = parseInt(getComputedStyle(carousel).width)
        panes.forEach(function (i) {
          i.style.width = paneWidth + 'px'
        })
        container.style.width = paneWidth * paneCount + 'px'
      }

      self.init = function () {
        setPaneSize()
        vueInstance.eventListeners = () => {
          setPaneSize()
          self.showPane(currentPane)
        }
        window.addEventListener('load', vueInstance.eventListeners)
        window.addEventListener('resize', vueInstance.eventListeners)
        window.addEventListener(
          'orientationchange',
          vueInstance.eventListeners
        )
        window.addEventListener('mouseout', vueInstance.eventListeners)
        selector.addEventListener('mouseout', vueInstance.eventListeners)
      }

      self.showPane = function (index) {
        currentPane = Math.max(0, Math.min(index, paneCount - 1))
        setContainerOffsetX(-currentPane * paneWidth, true)
      }

      function setContainerOffsetX (offsetX, doTransition) {
        if (doTransition) {
          container.classList.add('transition')

          container.addEventListener(
            'transitionend',
            function () {
              container.classList.remove('transition')
            },
            { once: true }
          )
          container.addEventListener(
            'webkitTransitionEnd',
            function () {
              container.classList.remove('transition')
            },
            { once: true }
          )
          container.addEventListener(
            'otransitionend',
            function () {
              container.classList.remove('transition')
            },
            { once: true }
          )
          container.addEventListener(
            'oTransitionEnd',
            function () {
              container.classList.remove('transition')
            },
            { once: true }
          )
          container.addEventListener(
            'msTransitionEnd',
            function () {
              container.classList.remove('transition')
            },
            { once: true }
          )
        }

        container.style.left = offsetX + 'px'
      }

      self.next = function () {
        self.showPane(++currentPane)
      }
      self.prev = function () {
        self.showPane(--currentPane)
      }

      function handleHammer (e) {
        switch (e.type) {
          case 'panup':
          case 'pandown':
            setPaneSize()
            self.showPane(currentPane)
            break
          case 'swipeleft':
          case 'swiperight':
            handleSwipe(e)
            break
          case 'panleft':
          case 'panright':
          case 'panend':
          case 'pancancel':
            handlePan(e)
            break
        }
      }

      function handleSwipe (e) {
        switch (e.direction) {
          case Hammer.DIRECTION_LEFT:
            self.next()
            break
          case Hammer.DIRECTION_RIGHT:
            self.prev()
            break
        }
        hammer.stop(true)
      }

      function outOfBound () {
        const left = parseInt(getComputedStyle(container).left)
        return (
          (currentPane === 0 && left >= 0) ||
          (currentPane === paneCount - 1 &&
            left <= -paneWidth * (paneCount - 1))
        )
      }

      function handlePan (e) {
        switch (e.type) {
          case 'panleft':
          case 'panright':
            if (outOfBound()) {
              e.deltaX *= 0.2
            }
            setContainerOffsetX(-currentPane * paneWidth + e.deltaX)
            break
          case 'panend':
          case 'pancancel':
            if (Math.abs(e.deltaX) > paneWidth * panBoundary) {
              if (e.deltaX > 0) {
                self.prev()
              } else {
                self.next()
              }
            } else {
              self.showPane(currentPane)
            }
            break
        }
      }

      const hammer = vueInstance
        .$hammer(selector)
        .on(
          'swipeleft swiperight panleft panright pandown panup panend pancancel',
          handleHammer
        )
    }

    const vueInstance = this

    this.$nextTick(() => {
      this.carousel = new Carousel(this.$refs.carousel)
      this.carousel.init()
      this.carousel.showPane(this.direction === 'ltr' ? 0 : 10)
    })
  },
  beforeDestroy () {
    window.removeEventListener('load', this.eventListeners)
    window.removeEventListener('resize', this.eventListeners)
    window.removeEventListener('orientationchange', this.eventListeners)
    window.removeEventListener('mouseout', this.eventListeners)
  }
})
</script>

<style>
.transition {
  transition: left 500ms ease-in-out;
}
.\!\!touch-pan-y {
  touch-action: pan-y !important;
}
</style>
