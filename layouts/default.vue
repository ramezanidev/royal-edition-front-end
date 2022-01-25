<template>
  <div class="bg-brand-3 h-screen px-[20px] pb-[20px] md:px-[40px] md:pb-[40px] xl:px-[50px] xl:pb-[50px] 2xl:px-[50px] 2xl:pb-[50px] flex flex-col">
    <LayoutAppHeader />
    <div class="rounded-[25px] flex-auto flex items-center relative p-[40px] xl:px-[60px] 2xl:px-[80px] bg-gradient-radial from-brand-1 to-brand-2" style="height:calc(100% - 100px)">
      <Nuxt />
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
