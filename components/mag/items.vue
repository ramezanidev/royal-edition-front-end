<template>
  <article
    class="wrapper w-full max-w-[1280px] p-2 pt-16 mx-auto grid"
    :style="columnsStyle"
  >
    <div>
      <div class="dark:bg-brand-mag-1 bg-white p-6 rounded-xl shadow-[0_10px_40px_0_#00000025]">
        <div class="rounded-xl group overflow-hidden transform -translate-y-12 shadow-[0_5px_20px_0_#00000020] cursor-pointer">
          <img class="transform-cpu scale-100 group-hover:scale-110 transition-transform duration-700 ease-in" src="https://noonpost.oonio.ir/html/template/assets/img/blog/27.jpg" alt="">
        </div>
        <div class="-mt-6">
          <div class="flex gap-1.5 flex-wrap">
            <span class="bg-brand-mag-4 transition-colors duration-500 text-white text-xs cursor-pointer px-3 py-1 select-none rounded-full font-bold">سبک زندگی</span>
            <span class="bg-brand-mag-4 transition-colors duration-500 text-white text-xs cursor-pointer px-3 py-1 select-none rounded-full font-bold">شخصی</span>
          </div>
          <h2 class="text-black dark:text-white hover:text-brand-mag-4 dark:hover:text-brand-mag-4 cursor-pointer duration-300 transition-colors text-xl font-bold mt-5">
            10 روش کارآمد برای کسب درآمد در خانه
          </h2>
          <p class="dark:text-brand-mag-3 text-brand-mag-5 mt-2 text-[15px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
          <div class="mt-8 mb-2 flex items-center">
            <!-- author -->
            <div class="flex gap-1.5 group items-center cursor-pointer">
              <img class="w-10 h-10 object-cover object-center rounded-full" draggable="false" src="/mag/author.jpg" alt="author">
              <span class="select-none text-xs text-brand-mag-5 dark:text-brand-mag-3 group-hover:text-brand-mag-4 transition-colors">فلانی فلانی نسب</span>
            </div>
            <!-- dot -->
            <span class="flex w-1.5 h-1.5 rounded-full bg-brand-mag-4 mx-4" />
            <!-- date -->
            <p class="select-none text-xs text-brand-mag-5 dark:text-brand-mag-3">
              24 بهمن 1400
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    sm: {
      type: Number,
      default: 1
    },
    md: {
      type: Number,
      default: 1
    },
    lg: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
  }),
  computed: {
    columnsStyle () {
      return `--sm: ${this.sm}; --md: ${this.md}; --lg: ${this.lg}`
    }
  }
})

</script>

<style lang="scss" scoped>
.wrapper {
    grid-template-columns: repeat(var(--sm), minmax(0, 1fr));
}

@screen md {
    .wrapper {
        grid-template-columns: repeat(var(--md), minmax(0, 1fr));
    }
}

@screen lg {
    .wrapper {
        grid-template-columns: repeat(var(--lg), minmax(0, 1fr));
    }
}
</style>

<i18n>
{
  "en": {
  },
  "fa": {
  }
}
</i18n>
