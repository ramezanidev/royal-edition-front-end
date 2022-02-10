<template>
  <div :class="{ dark: darkMode }" class="h-full w-full">
    <div class="bg-[#f9f9ff] transition-colors dark:bg-brand-mag-2">
      <MagLayoutHeader />
      <Nuxt class="pt-16" />
      <MagLayoutFootrer />
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
      }
    }
  },
  computed: {
    darkMode () {
      return this.$store.getters.darkMode as boolean
    }
  },
  async beforeCreate () {
    await this.$store.dispatch('init')
  }
})
</script>
<style></style>
