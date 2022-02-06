<template>
  <div
    ref="parentElement"
    class="flex h-full w-full grid-cols-2 flex-col-reverse items-center justify-center gap-x-6 md:grid"
    @wheel="onScroll"
  >
    <div
      class="col-start-1 col-end-2 mt-6 text-center sm:mt-8 md:mt-0 md:ltr:text-left md:rtl:text-right"
    >
      <h2
        class="mb-4 whitespace-nowrap text-[1.2rem] font-extrabold text-brand-3 sm:mb-6 sm:text-[1.5rem] md:mb-10 md:text-[2.3rem] xl:text-[2.8rem]"
      >
        {{ $t('title') }}
      </h2>
      <p
        class="mb-6 max-w-xl text-sm text-brand-5 sm:mb-8 sm:text-lg md:mb-12 xl:text-xl"
      >
        {{ $t('description') }}
      </p>
      <div class="flex justify-center gap-x-4 sm:gap-x-6 md:justify-start">
        <button
          class="ا flex h-10 w-32 select-none items-center justify-evenly rounded-xl bg-brand-7 p-1 font-bold text-brand-3 transition-all hover:bg-brand-4 sm:h-12 sm:p-2 md:w-36"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="h-[18px]sm:w-[24px] w-[18px] sm:h-[24px]"
            viewBox="0 0 16 16"
          >
            <path
              d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
            />
            <path
              d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"
            />
          </svg>
          <span class="text-sm sm:text-base">
            {{ $t('links.calculator') }}</span>
        </button>
        <nuxt-link to="/#services">
          <button
            class="ا flex h-10 w-32 select-none items-center justify-evenly rounded-xl bg-brand-7 p-1 font-bold text-brand-3 transition-all hover:bg-brand-4 sm:h-12 sm:p-2 md:w-36"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="h-[18px]sm:w-[24px] w-[18px] sm:h-[24px]"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
              />
              <path
                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
              />
            </svg>
            <span class="text-sm sm:text-base">
              {{ $t('links.services') }}</span>
          </button>
        </nuxt-link>
      </div>
    </div>
    <div class="flex w-full justify-center md:block md:w-auto">
      <div
        class="flex w-full max-w-[500px] items-center overflow-hidden md:ltr:ml-auto md:rtl:mr-auto xl:max-w-[580px]"
      >
        <img
          class="my-auto w-full"
          draggable="false"
          src="/sample-image.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import { sectionNavigate } from '@/mixins'

export default mixins(sectionNavigate).extend({
  name: 'IntroductionSection',
  /*
   read:  (next and previous) methods: [
     next: navigate next section
     previous: navigate previous section
   ]
  */
  mixins: [sectionNavigate],
  mounted () {
    const el = this.$refs.parentElement as HTMLDivElement
    // @ts-ignore
    const mc = this.$hammer(el)

    mc.on('swipeup swipedown', (event: any) => {
      if (event.type === 'swipeup') {
        this.next()
      } else if (event.type === 'swipedown') {
        this.previous()
      }
    })
  },
  methods: {
    onScroll (event: WheelEvent) {
      if (event.deltaY < 0) {
        this.previous()
      } else {
        this.next()
      }
    }
  }
})
</script>

<i18n>
{
  "en": {
    "title": "Lorem ipsum dolor sit amet",
    "description": "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio molestias dicta eum optio aut, veritatis sequi repudiandae, voluptatibus tempore quos excepturi quasi corporis repellat amet, rem quidem laborum! Ullam",
    "links": {
      "services": "Services",
      "calculator": "Calculator"
    }
  },
  "fa": {
    "title": "لورم ایپسوم متن ساختگی",
    "description": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای",
    "links": {
      "services": "خدمات",
      "calculator": "حساب گر"
    }
  }
}
</i18n>
