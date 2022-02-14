<template>
  <div class="h-full w-full flex justify-center items-center px-2">
    <div class="bg-white dark:bg-brand-mag-1 flex flex-col items-center rounded-lg shadow-[0_10px_40px_0_#00000025] py-12 md:px-20 w-full md:w-auto mx-0 my-16 md:mx-16">
      <strong class="text-brand-mag-4 text-center text-[50px] sm:text-[80px] md:text-[100px] lg:text-[130px] select-none">{{ error.statusCode }}</strong>
      <p class="text-brand-mag-2 text-center font-bold text-sm sm:text-base md:text-lg dark:text-white">
        {{ error.statusCode === 404 ? $t('404') : error.message }}
      </p>
      <p v-if="error.statusCode === 404" class="text-xs text-center sm:text-sm text-brand-mag-5 dark:text-brand-mag-3">
        {{ $t('subtitle') }}
      </p>
      <NuxtLink :to="localePath('/mag', $i18n.locale)" class="mt-4">
        <button
          type="submit"
          class="text-sm rounded-lg bg-brand-mag-4 py-1 px-2 text-white opacity-100 transition-colors duration-500 hover:opacity-90 md:rounded-full"
        >
          {{ $t('backHome') }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { ErrorPropType } from '@/index'

export default Vue.extend({
  layout: 'mag',
  props: {
    error: {
      type: Object as () => ErrorPropType,
      default: () => ({})
    }
  }
})
</script>

<i18n>
{
    "en": {
        "404": "This page could not be found",
        "backHome": "back to main page",
        "subtitle": "Sorry, the content you are looking for was not found."
    },
    "fa": {
        "404": "این صفحه یافت نشد",
        "backHome": "بازگشت به صفحه اصلی",
        "subtitle": "مطلبی که به دنبال آن هستید متاسفانه پیدا نشد."
    }
}
</i18n>
