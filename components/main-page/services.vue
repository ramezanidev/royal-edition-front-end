<template>
  <div ref="parentElement" class="w-full h-full flex items-center" @wheel="onScroll">
    <div class="absolute flex flex-col md:flex-row top-0 inset-x-0 w-full md:w-auto h-full overflow-hidden px-10 md:px-0 md:py-12">
      <div class="aspect-[2/1] md:aspect-[1/2]">
        1
      </div>
      <div class="bg-red-500 flex flex-auto">
        1
      </div>
      <!--  -->
      <div class="transform w-full md:w-auto h-auto -translate-y-1/2 md:translate-y-0 ltr:md:-translate-x-1/2 rtl:md:translate-x-1/2 absolute ltr:left-0 rtl:right-0 top-0 md:h-full px-12 md:px-0 md:py-12">
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
import Vue from 'vue'

import { sectionNavigate } from '@/mixins'

export default Vue.extend({
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
    const mc = this.$hammer(el)

    mc.on('swipeup swipedown', (event:any) => {
      if (event.type === 'swipeup') {
        this.next()
      } else if (event.type === 'swipedown') {
        this.previous()
      }
    })
  },
  methods: {
    onScroll (event:WheelEvent) {
      if (event.deltaY < 0) {
        this.next()
      } else {
        this.previous()
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
