<template>
  <div :class="{ dark: darkMode }" class="h-full w-full">
    <div
      class="flex min-h-screen flex-col bg-brand-mag-3 transition-colors dark:bg-brand-mag-2"
    >
      <MagLayoutHeader />
      <Nuxt class="pt-16" />
      <MagLayoutFootrer class="mt-auto" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MagLayoutFootrer from '@/components/mag/layout/footer.vue'
import MagLayoutHeader from '@/components/mag/layout/header.vue'

export default Vue.extend({
  components: {
    MagLayoutFootrer,
    MagLayoutHeader
  },
  head () {
    return {
      htmlAttrs: {
        dir: this.$i18n.t('dir') as string
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/mag/mag-favicon.ico'
        }
      ]
    }
  },
  computed: {
    darkMode () {
      return this.$store.getters.darkMode as boolean
    }
  },
  created () {
    if (process.client) {
      this.$nextTick(() => {
        document.querySelector<HTMLElement>('#__nuxt')!.style.height = 'auto'
        document.querySelector<HTMLElement>('#__layout')!.style.height = 'auto'
        document.querySelector<HTMLElement>('html')!.style.height = 'auto'
        document.querySelector<HTMLElement>('body')!.style.height = 'auto'
      })
    }
  },
  async beforeCreate () {
    await this.$store.dispatch('init')
  }
})
</script>
<style></style>
