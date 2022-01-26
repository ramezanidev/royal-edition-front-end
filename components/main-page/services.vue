<template>
  <div ref="parentElement" class="w-full h-full flex items-center" @wheel="onScroll">
    <!-- navigate -->
    <button class="absolute top-1/2 right-3 inline-block md:hidden" @click="nextSlide">
      <svg class="w-4" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3536 14.5592C17.3033 15.6788 17.3033 17.3212 16.3536 18.4408L5.28768 31.4847C3.48098 33.6144 0 32.3368 0 29.544L0 3.45601C0 0.663224 3.48098 -0.614399 5.28768 1.51526L16.3536 14.5592Z" fill="#BBE1FA" />
      </svg>
    </button>
    <button class="absolute top-1/2 left-3 inline-block md:hidden" @click="previousSlide">
      <svg class="w-4" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.64644 18.4408C0.696679 17.3212 0.696679 15.6788 1.64644 14.5592L12.7123 1.51527C14.519 -0.614395 18 0.663239 18 3.45602L18 29.544C18 32.3368 14.519 33.6144 12.7123 31.4847L1.64644 18.4408Z" fill="#BBE1FA" />
      </svg>
    </button>
    <!-- body -->
    <div class="absolute flex flex-col md:flex-row top-0 inset-x-0 w-full md:w-auto h-full overflow-hidden px-10 md:px-0 md:py-12">
      <div class="aspect-[2/1] md:aspect-[1/2]">
        1
      </div>
      <div class="flex flex-auto py-[40px] md:py-0 xl:px-[60px] md:px-[40px] overflow-hidden">
        <transition
          mode="out-in"
          leave-active-class="transition-all duration-300"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          enter-active-class="transition-all duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          @enter="endedAnimation"
          @before-leave="isAnimation = true"
          @before-enter="isAnimation = true"
        >
          <template v-for="i in 6">
            <div v-if="i === step" :key="i" class="w-full h-full">
              <div class="w-full h-full flex flex-col-reverse justify-center md:grid grid-cols-2 gap-x-6 items-center">
                <div class="col-start-1 col-end-2 text-center md:rtl:text-right  md:ltr:text-left mt-8 md:mt-0">
                  <h2 class="text-[1.5rem] whitespace-nowrap md:text-[2.3rem] xl:text-[2.8rem] mb-6 md:mb-10 font-extrabold text-brand-3">
                    {{ $t("title") + ' ' + i }}
                  </h2>
                  <p class="text-brand-5 text-lg xl:text-xl mb-8 md:mb-12 max-w-xl">
                    {{ $t("description") }}
                  </p>
                </div>
                <div class="w-full md:w-auto flex md:block justify-center">
                  <div
                    class="
          overflow-hidden
          w-full
          md:ltr:ml-auto md:rtl:mr-auto flex items-center xl:max-w-[580px]  max-w-[500px]
        "
                  >
                    <img class="w-full my-auto" draggable="false" src="/sample-image.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </template>
        </transition>
      </div>
      <!--  -->
      <div class="transform w-full md:w-auto h-auto -translate-y-1/2 md:translate-y-0 ltr:md:-translate-x-1/2 rtl:md:translate-x-1/2 absolute ltr:left-0 rtl:right-0 top-0 md:h-full px-8 md:px-0 md:py-8">
        <div class="flex bg-white rounded-full relative aspect-square w-full md:h-full">
          <div class="absolute inset-0">
            2
          </div>
          <div class="bg-gray-400 w-16 h-16 rounded-full m-auto">
            1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import { sectionNavigate } from '@/mixins'
import tailwindConfig from '@/tailwind.config'

export default mixins(sectionNavigate).extend({
  name: 'ServicesSection',
  /*
   read:  (next and previous) methods: [
     next: navigate next section
     previous: navigate previous section
   ]
  */
  mixins: [sectionNavigate],
  data: () => ({
    step: 1,
    total: 6,
    isAnimation: true /* flag for fade animate */
  }),
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isAnimation = false
      }, 200)
    })
    const el = this.$refs.parentElement as HTMLDivElement
    // @ts-ignore
    const mc = this.$hammer(el)

    mc.on('swipeup swipedown swiperight swipeleft', (event:any) => {
      if (!this.isAnimation) {
        if (this.breakPoint.md) {
          if (event.type === 'swipeup') {
            this.nextSlide()
          } else if (event.type === 'swipedown') {
            this.previousSlide()
          }
        } else if (event.type === 'swiperight') {
          this.nextSlide()
        } else if (event.type === 'swipeleft') {
          this.previousSlide()
        } else if (event.type === 'swipeup') {
          this.next()
        } else if (event.type === 'swipedown') {
          this.previous()
        }
      }
    })
  },
  computed: {
    breakPoint () {
      return this.$breakPoint(tailwindConfig.theme.screens)
    }
  },
  methods: {
    onScroll (event:WheelEvent) {
      if (!this.isAnimation) {
        if (event.deltaY < 0) {
          this.previousSlide()
        } else {
          this.nextSlide()
        }
      }
    },
    nextSlide () {
      if (this.step >= 6) {
        this.next()
      } else {
        this.step++
      }
    },
    previousSlide () {
      if (this.step <= 1) {
        this.previous()
      } else {
        this.step--
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
