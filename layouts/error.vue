<template>
  <div class="flex h-full w-full items-center justify-center px-2">
    <div
      class="mx-0 my-16 flex w-full flex-col items-center rounded-lg bg-white py-12 shadow-[0_10px_40px_0_#00000025] dark:bg-brand-mag-1 md:mx-16 md:w-auto md:px-20"
    >
      <strong
        class="select-none text-center text-[50px] text-brand-mag-4 sm:text-[80px] md:text-[100px] lg:text-[130px]"
      >{{ error.statusCode }}</strong>
      <p
        class="text-center text-sm font-bold text-brand-mag-2 dark:text-white sm:text-base md:text-lg"
      >
        {{ error.statusCode === 404 ? $t('404') : error.message }}
      </p>
      <p
        v-if="error.statusCode === 404"
        class="text-center text-xs text-brand-mag-5 dark:text-brand-mag-3 sm:text-sm"
      >
        {{ $t('subtitle') }}
      </p>
      <NuxtLink :to="localePath('/mag', $i18n.locale)" class="mt-4">
        <button
          type="submit"
          class="rounded-lg bg-brand-mag-4 py-1 px-2 text-sm text-white opacity-100 transition-colors duration-500 hover:opacity-90 md:rounded-full"
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
