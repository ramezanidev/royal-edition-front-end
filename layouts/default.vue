<template>
  <div class="bg-brand-3 h-full px-[20px] pb-[20px] md:px-[40px] md:pb-[40px] xl:px-[50px] xl:pb-[50px] 2xl:px-[50px] 2xl:pb-[50px] flex flex-col">
    <LayoutAppHeader />
    <div class="rounded-[25px] flex-auto flex items-center relative bg-gradient-radial from-brand-1 to-brand-2" style="height:calc(100% - 100px)">
      <Nuxt />
      <button
        class="bg-gradient-to-b shadow-lg backdrop-blur-[5px] backdrop-filter from-[#003050bd] to-[#0f4c75c0] absolute rounded-full items-center justify-center md:bottom-4 -bottom-3 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 md:w-12 md:h-12 w-10 h-10 flex"
        @click="step++"
      >
        <svg class="w-4" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7924 16.9706C13.3921 17.4906 12.6079 17.4906 12.2076 16.9706L0.382967 1.60999C-0.12323 0.952425 0.345533 0 1.17537 0L24.8246 0C25.6545 0 26.1232 0.952425 25.617 1.60999L13.7924 16.9706Z" fill="white" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DefaultLayout',
  head () {
    return {
      htmlAttrs: {
        dir: this.$i18n.t('dir') as string
      }
    }
  }
})
</script>

<style>
html, body, #__nuxt, #__layout {
  @apply h-full w-full
}
</style>
