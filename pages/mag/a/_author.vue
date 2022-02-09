<template>
  <h2>author: {{ $route.params.author }}</h2>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'mag'
})
</script>
