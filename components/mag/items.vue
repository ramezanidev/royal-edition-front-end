<template>
  <article
    class="wrapper mx-auto grid w-full max-w-[1280px] p-2 pt-16"
    :style="columnsStyle"
  >
    <div>
      <div
        class="rounded-xl bg-white p-6 shadow-[0_10px_40px_0_#00000025] dark:bg-brand-mag-1"
      >
        <div
          class="group -translate-y-12 transform cursor-pointer overflow-hidden rounded-xl shadow-[0_5px_20px_0_#00000020]"
        >
          <img
            class="scale-100 transform-cpu transition-transform duration-700 ease-in group-hover:scale-110"
            src="https://noonpost.oonio.ir/html/template/assets/img/blog/27.jpg"
            alt=""
          >
        </div>
        <div class="-mt-6">
          <div class="flex flex-wrap gap-1.5">
            <span
              class="cursor-pointer select-none rounded-full bg-brand-mag-4 px-3 py-1 text-xs font-bold text-white transition-colors duration-500"
            >سبک زندگی</span>
            <span
              class="cursor-pointer select-none rounded-full bg-brand-mag-4 px-3 py-1 text-xs font-bold text-white transition-colors duration-500"
            >شخصی</span>
          </div>
          <h2
            class="mt-5 cursor-pointer text-xl font-bold text-black transition-colors duration-300 hover:text-brand-mag-4 dark:text-white dark:hover:text-brand-mag-4"
          >
            10 روش کارآمد برای کسب درآمد در خانه
          </h2>
          <p class="mt-2 text-[15px] text-brand-mag-5 dark:text-brand-mag-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <div class="mt-8 mb-2 flex items-center">
            <!-- author -->
            <div class="group flex cursor-pointer items-center gap-1.5">
              <img
                class="h-10 w-10 rounded-full object-cover object-center"
                draggable="false"
                src="/mag/author.jpg"
                alt="author"
              >
              <span
                class="select-none text-xs text-brand-mag-5 transition-colors group-hover:text-brand-mag-4 dark:text-brand-mag-3"
              >فلانی فلانی نسب</span>
            </div>
            <!-- dot -->
            <span class="mx-4 flex h-1.5 w-1.5 rounded-full bg-brand-mag-4" />
            <!-- date -->
            <p
              class="select-none text-xs text-brand-mag-5 dark:text-brand-mag-3"
            >
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
  data: () => ({}),
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
