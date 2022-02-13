<template>
  <div
    class="flex h-full flex-col bg-brand-3 px-[20px] pb-[20px] md:px-[40px] md:pb-[40px] xl:px-[50px] xl:pb-[50px] 2xl:px-[50px] 2xl:pb-[50px]"
  >
    <LayoutAppHeader />
    <div
      class="relative flex flex-auto items-center rounded-[25px] bg-gradient-radial from-brand-1 to-brand-2"
      style="height: calc(100% - 100px)"
    >
      <Nuxt />
      <button
        v-if="showButton"
        :class="[
          {
            'md:left-6 md:right-auto': buttonPosition.x === 'left',
          },
          {
            'md:right-6 md:left-auto': buttonPosition.x === 'right',
          },
        ]"
        class="absolute -bottom-3 left-1/2 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full bg-gradient-to-b from-[#003050bd] to-[#0f4c75c0] shadow-lg backdrop-blur-[5px] backdrop-filter md:bottom-4 md:h-12 md:w-12 md:translate-x-0"
        @click="scrollTo"
      >
        <svg
          :class="{
            '!rotate-180': buttonPosition.rotate === 'up',
          }"
          class="w-4 rotate-0 transition-all duration-1000"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7924 16.9706C13.3921 17.4906 12.6079 17.4906 12.2076 16.9706L0.382967 1.60999C-0.12323 0.952425 0.345533 0 1.17537 0L24.8246 0C25.6545 0 26.1232 0.952425 25.617 1.60999L13.7924 16.9706Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { RootState } from '@/store/scrollToButton'

export default Vue.extend({
  name: 'DefaultLayout',
  head () {
    return {
      htmlAttrs: {
        dir: this.$i18n.t('dir') as string
      }
    }
  },
  computed: {
    direction () {
      return this.$i18n.t('dir') as string
    },
    buttonPosition () {
      return this.$store.getters[
        'scrollToButton/position'
      ] as RootState['position']
    },
    showButton () {
      return this.$route.path === '/' // show only main-page
    }
  },
  watch: {
    '$i18n.locale': {
      handler () {
        const positon = {
          x: this.direction === 'ltr' ? 'right' : 'left'
        }
        this.$store.commit('scrollToButton/changePosition', positon)
      },
      immediate: true
    }
  },
  created () {
    if (process.client) {
      this.$nextTick(() => {
        document.querySelector<HTMLElement>('#__nuxt')!.style.height = '100%'
        document.querySelector<HTMLElement>('#__layout')!.style.height = '100%'
        document.querySelector<HTMLElement>('html')!.style.height = '100%'
        document.querySelector<HTMLElement>('body')!.style.height = '100%'
      })
    }
  },
  methods: {
    nextSection () {
      this.$store.commit('mainPageStep/increase')
    },
    previousSection () {
      this.$store.commit('mainPageStep/dicrease')
    },
    scrollTo () {
      if (this.buttonPosition.rotate === 'up') {
        // this.$store.commit('mainPageStep/setStep', 1) // go to first section
        this.previousSection()
      } else {
        this.nextSection()
      }
    }
  }
})
</script>

<style>
html,
body,
#__nuxt,
#__layout {
  @apply h-full w-full;
}
</style>
