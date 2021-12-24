<template>
  <div>
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link>
    <h1 class="text-3xl font-bold underline text-red-800"> {{ $t("welcome") }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  asyncData({$axios}){
    return $axios.$get("https://jsonplaceholder.typicode.com/todos/1")
  }
});
</script>
