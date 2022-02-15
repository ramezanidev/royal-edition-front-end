<template>
  <div class="w-full pt-16 pb-24">
    <!-- slider -->
    <MagCarousel />
    <!-- content -->
    <div
      class="mx-auto flex w-full max-w-[1280px] flex-col gap-4 p-2 md:flex-row"
    >
      <div class="w-full md:w-[calc(100%-22rem)]">
        <MagItems :sm="1" :md="1" :lg="2" />
      </div>
      <div class="w-full space-y-6 pt-4 md:w-[22rem] md:pt-10">
        <!-- recently -->
        <div
          class="rounded-xl bg-white p-4 shadow-[0_10px_40px_0_#00000025] dark:bg-brand-mag-1"
        >
          <h3 class="text-lg font-bold text-black dark:text-white">
            {{ $t('recentPosts') }}
          </h3>
          <div class="mt-4 space-y-4">
            <div v-for="i in 4" :key="i" class="flex h-[4.5rem] gap-x-2">
              <div class="group cursor-pointer overflow-hidden rounded-lg">
                <img
                  class="aspect-square h-full w-full scale-100 transform-cpu object-cover object-center transition-transform duration-700 ease-in group-hover:scale-110"
                  src="https://noonpost.oonio.ir/html/template/assets/img/blog/27.jpg"
                  alt=""
                >
              </div>
              <div class="flex flex-col">
                <h4
                  class="cursor-pointer text-black transition-colors hover:text-brand-mag-4 dark:text-white dark:hover:text-brand-mag-4"
                >
                  قبل از سفر به مالزی می دانستم
                </h4>
                <div class="mt-1 flex gap-1.5">
                  <svg
                    class="h-3 w-3 text-brand-mag-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                    />
                    <path
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                    />
                  </svg>
                  <span class="text-xs text-brand-mag-5 dark:text-brand-mag-3">20 خرداد 1400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- category -->
        <div
          class="rounded-xl bg-white p-4 shadow-[0_10px_40px_0_#00000025] dark:bg-brand-mag-1"
        >
          <h3 class="text-lg font-bold text-black dark:text-white">
            {{ $t('categories') }}
          </h3>
          <div class="mt-4 space-y-4">
            <div
              v-for="i in 4"
              :key="i"
              class="flex h-12 items-center justify-between gap-x-2 rounded-lg bg-brand-mag-3 px-4 dark:bg-brand-mag-2"
            >
              <span
                class="cursor-pointer select-none rounded-full bg-brand-mag-4 px-3 py-1 text-xs font-bold text-white transition-colors duration-500"
              >سبک زندگی</span>
              <span class="text-sm text-brand-mag-5 dark:text-white">2{{ i }} نوشته</span>
            </div>
          </div>
        </div>
        <!-- instagram -->
        <div
          class="rounded-xl bg-white p-4 shadow-[0_10px_40px_0_#00000025] dark:bg-brand-mag-1"
        >
          <h3 class="text-lg font-bold text-black dark:text-white">
            {{ $t('instagram') }}
          </h3>
          <div class="mt-4 grid grid-cols-3 gap-2">
            <div
              v-for="i in 6"
              :key="i"
              class="group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                class="aspect-square h-full w-full scale-100 transform-cpu object-cover object-center transition-transform duration-700 ease-in group-hover:scale-110"
                src="https://noonpost.oonio.ir/html/template/assets/img/blog/27.jpg"
                alt=""
              >
            </div>
          </div>
        </div>
        <!-- tags -->
        <div
          class="rounded-xl bg-white p-4 shadow-[0_10px_40px_0_#00000025] dark:bg-brand-mag-1"
        >
          <h3 class="text-lg font-bold text-black dark:text-white">
            {{ $t('labels') }}
          </h3>
          <div class="mt-4 flex flex-wrap gap-1 gap-y-1.5">
            <span
              v-for="i in 8"
              :key="i"
              class="cursor-pointer select-none rounded-full bg-brand-mag-3 px-3 py-1 text-xs font-bold text-brand-mag-5 transition-colors duration-500 hover:bg-brand-mag-4 hover:text-white dark:bg-brand-mag-2 dark:text-white dark:hover:bg-brand-mag-4 dark:hover:text-white"
            >شخصی {{ i }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'mag'
})
</script>

<i18n>
{
    "en": {
      "recentPosts": "Recent Posts",
      "categories": "Categories",
      "instagram": "Instagram",
      "labels": "Labels"
    },
    "fa": {
      "recentPosts": "نوشته های اخیر",
      "categories": "دسته بندی ها",
      "instagram": "اینستاگرام",
      "labels": "برچسب ها"
    }
}
</i18n>
