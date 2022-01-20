<template>
  <div>
    <NuxtLink
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </NuxtLink>
    <h1 class="text-3xl font-bold underline text-red-800">
      {{ $t("welcome") }}
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  asyncData ({ i18n, $api }) {
    i18n.mergeLocaleMessage('fa', { welcome: '1' })
    return $api.$get('/todos/1')
  }
})
</script>
