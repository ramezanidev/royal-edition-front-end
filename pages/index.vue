<template>
  <div class="w-full h-full">
    <MainPageIntroduction v-if="step === 1" @next="step++" />
    <MainPageServices v-else-if="step === 2" @previous="step--" />
    <button
      class="bg-gradient-to-b shadow-lg backdrop-blur-[5px] backdrop-filter from-[#003050bd] to-[#0f4c75c0] absolute rounded-full items-center justify-center md:bottom-4 -bottom-3 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 md:w-12 md:h-12 w-10 h-10 flex"
      @click="step++"
    >
      <svg class="w-4" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7924 16.9706C13.3921 17.4906 12.6079 17.4906 12.2076 16.9706L0.382967 1.60999C-0.12323 0.952425 0.345533 0 1.17537 0L24.8246 0C25.6545 0 26.1232 0.952425 25.617 1.60999L13.7924 16.9706Z" fill="white" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    step: 2 /* active section */
  })
})
</script>
