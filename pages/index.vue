<template>
  <div class="w-full h-full overflow-hidden absolute inset-0 rounded-[25px] p-[40px] xl:px-[60px] 2xl:px-[80px]">
    <transition :name="animation">
      <MainPageIntroduction v-show="step === 1" @next="nextSection" />
    </transition>
    <transition :name="animation">
      <MainPageServices v-show="step === 2" @previous="previousSection" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    step: 1 /* active section */,
    animation: 'fade',
    isAnimation: false
  }),
  watch: {
    step (a, b) {
      this.animation = a > b ? 'slide' : 'fade'
      // stop change sections
      this.isAnimation = true
      setTimeout(() => {
        this.isAnimation = false
      }, 1000)
    }
  },
  methods: {
    nextSection () {
      if (!this.isAnimation) {
        this.step++
      }
    },
    previousSection () {
      if (!this.isAnimation) {
        this.step--
      }
    }
  }
})
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: 1000ms;
}
.fade-enter{
  transform: translateY(-100%);
}
.fade-enter-to, .fade-leave {
  transform: translateY(0%);
}
.fade-leave-to {
  transform: translateY(100%);
}

.slide-enter-active, .slide-leave-active {
  transition: 1000ms;
}
.slide-enter{
  transform: translateY(100%);
}
.slide-enter-to, .slide-leave {
  transform: translateY(0%);
}
.slide-leave-to {
  transform: translateY(-100%);
}

</style>
