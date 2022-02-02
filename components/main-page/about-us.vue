<template>
  <div
    ref="parentElement"
    class="
      w-full
      h-full
      flex flex-col-reverse
      justify-center
      items-center
       inset-0 absolute px-12
    "
    @wheel="onScroll"
  >
    <!-- navigate -->
    <button
      v-show="step !== 3"
      class="
        absolute
        z-[1]
        top-1/2
        ltr:right-3
        rtl:left-3 rtl:transform rtl:rotate-180 px-1
      "
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
      class="
        absolute
        z-[1]
        top-1/2
        ltr:left-3
        rtl:right-3 rtl:transform rtl:rotate-180 px-1
      "
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
    <div class="w-full absolute top-4 inset-x-0 flex gap-x-1.5 justify-center">
      <span v-for="index in 3" :key="index" :class="{'!bg-brand-3': index === step}" class="w-8 sm:w-12 md:w-14 h-1.5 rounded transition-all duration-500 cursor-pointer bg-brand-7 flex " @click="step = index" />
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
        <div v-if="i === step" :key="i" class="w-full h-full">
          <div
            class="
          w-full
          h-full
          flex flex-col-reverse
          justify-center
          md:grid
          grid-cols-2
          gap-x-6
          items-center
        "
          >
            <div
              class="
            col-start-1 col-end-2
            text-center
            md:rtl:text-right md:ltr:text-left
            sm:mt-8
            mt-4
            md:mt-0
          "
            >
              <h2
                class="
              text-[1.2rem]
              sm:text-[1.5rem]
              whitespace-nowrap
              md:text-[2.3rem]
              xl:text-[2.8rem]
              sm:mb-6
              mb-4
              md:mb-10
              font-extrabold
              text-brand-3
            "
              >
                {{ $t("title") + ' ' + i }}
              </h2>
              <p
                class="
              text-brand-5 text-sm
              sm:text-lg
              xl:text-xl
              mb-8
              md:mb-12
              max-w-xl
            "
              >
                {{ $t("description") }}
              </p>
            </div>
            <div class="w-full md:w-auto flex md:block justify-center">
              <div
                class="
              overflow-hidden
              w-full
              md:ltr:ml-auto md:rtl:mr-auto
              flex
              items-center
              xl:max-w-[580px]
              max-w-[500px]
            "
              >
                <img
                  class="w-full my-auto"
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
    <p class="text-white hidden md:flex absolute bottom-0 p-4 px-6 font-light w-[fit-content] rtl:text-left inset-x-0" dir="ltr">
      Licensed by <a href="https://coilaco.com" class="mx-1" target="_blank" rel="noopener noreferrer"><strong class="font-bold">Coilaco</strong></a>
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
    previousSlide (previousSection?:boolean) {
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
