<template>
  <div
    ref="parentElement"
    class="absolute inset-0 flex h-full w-full flex-col-reverse items-center justify-center px-12"
    @wheel="onScroll"
  >
    <!-- navigate -->
    <button
      v-show="step !== 3"
      class="absolute top-1/2 z-[1] px-1 ltr:right-3 rtl:left-3 rtl:rotate-180 rtl:transform"
      @click.stop="nextSlide"
    >
      <svg
        class="w-4"
        viewBox="0 0 18 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3536 14.5592C17.3033 15.6788 17.3033 17.3212 16.3536 18.4408L5.28768 31.4847C3.48098 33.6144 0 32.3368 0 29.544L0 3.45601C0 0.663224 3.48098 -0.614399 5.28768 1.51526L16.3536 14.5592Z"
          fill="#BBE1FA"
        />
      </svg>
    </button>
    <button
      v-show="step !== 1"
      class="absolute top-1/2 z-[1] px-1 ltr:left-3 rtl:right-3 rtl:rotate-180 rtl:transform"
      @click.stop="previousSlide"
    >
      <svg
        class="w-4"
        viewBox="0 0 18 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.64644 18.4408C0.696679 17.3212 0.696679 15.6788 1.64644 14.5592L12.7123 1.51527C14.519 -0.614395 18 0.663239 18 3.45602L18 29.544C18 32.3368 14.519 33.6144 12.7123 31.4847L1.64644 18.4408Z"
          fill="#BBE1FA"
        />
      </svg>
    </button>
    <div class="absolute inset-x-0 top-4 flex w-full justify-center gap-x-1.5">
      <span
        v-for="index in 3"
        :key="index"
        :class="{ '!bg-brand-3': index === step }"
        class="flex h-1.5 w-8 cursor-pointer rounded bg-brand-7 transition-all duration-500 sm:w-12 md:w-14"
        @click="step = index"
      />
    </div>
    <transition
      mode="out-in"
      leave-active-class="transition-all ease-in-out duration-500"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      enter-active-class="transition-all ease-in-out duration-500"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      @enter="endedAnimation"
      @before-leave="isAnimation = true"
      @before-enter="isAnimation = true"
    >
      <template v-for="i in 3">
        <div v-if="i === step" :key="i" class="h-full w-full">
          <div
            class="flex h-full w-full grid-cols-2 flex-col-reverse items-center justify-center gap-x-6 md:grid"
          >
            <div
              class="col-start-1 col-end-2 mt-4 text-center sm:mt-8 md:mt-0 md:ltr:text-left md:rtl:text-right"
            >
              <h2
                class="mb-4 whitespace-nowrap text-[1.2rem] font-extrabold text-brand-3 sm:mb-6 sm:text-[1.5rem] md:mb-10 md:text-[2.3rem] xl:text-[2.8rem]"
              >
                {{ $t('title') + ' ' + i }}
              </h2>
              <p
                class="mb-8 max-w-xl text-sm text-brand-5 sm:text-lg md:mb-12 xl:text-xl"
              >
                {{ $t('description') }}
              </p>
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
        </div>
      </template>
    </transition>
    <!-- CopyRight LICENSE -->
    <p
      class="absolute inset-x-0 bottom-0 hidden w-[fit-content] p-4 px-6 font-light text-white rtl:text-left md:flex"
      dir="ltr"
    >
      Licensed by
      <a
        href="https://coilaco.com"
        class="mx-1"
        target="_blank"
        rel="noopener noreferrer"
      ><strong class="font-bold">Coilaco</strong></a>
    </p>
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import { sectionNavigate } from '@/mixins'

export default mixins(sectionNavigate).extend({
  name: 'AboutUsSection',
  /*
   read:  (next and previous) methods: [
     next: navigate next section
     previous: navigate previous section
   ]
  */
  mixins: [sectionNavigate],
  data: () => ({
    step: 1,
    isAnimation: false
  }),

  mounted () {
    const el = this.$refs.parentElement as HTMLDivElement
    const mc = this.$hammer(el)

    mc.on('swipeup swipedown swiperight swipeleft', (event: any) => {
      if (!this.isAnimation) {
        if (event.type === 'swipeup') {
          this.nextSlide()
        } else if (event.type === 'swipedown') {
          this.previous()
        } else if (event.type === 'swiperight') {
          if (this.direction === 'rtl') {
            this.nextSlide()
          } else if (this.direction === 'ltr') {
            this.previousSlide()
          }
        } else if (event.type === 'swipeleft') {
          if (this.direction === 'rtl') {
            this.previousSlide()
          } else if (this.direction === 'ltr') {
            this.nextSlide()
          }
        }
      }
    })
  },
  computed: {
    direction () {
      return this.$i18n.t('dir') as string
    }
  },
  methods: {
    onScroll (event: WheelEvent) {
      if (event.deltaY < 0) {
        this.previousSlide(true)
      } else {
        this.nextSlide()
      }
    },
    nextSlide () {
      if (this.step < 3 && !this.isAnimation) {
        this.step++
      }
    },
    previousSlide (previousSection?: boolean) {
      if (this.step > 1 && !this.isAnimation) {
        this.step--
      } else if (!this.isAnimation && previousSection) {
        this.previous()
      }
    },
    endedAnimation () {
      setTimeout(() => (this.isAnimation = false), 200)
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
