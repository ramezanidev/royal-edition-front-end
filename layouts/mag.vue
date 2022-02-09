<template>
  <div class="w-full h-full bg-brand-mag-2">
    <MagLayoutHeader />
    <Nuxt class="pt-16 my-2" />
    <MagLayoutFootrer />
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
  }
})
</script>
<style>

</style>
