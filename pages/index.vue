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
    animation: 'down',
    isAnimation: false,
    animationFlagTimeOut: null as any,
    routerHash: {
      1: '',
      2: '#services'
    }
  }),
  watch: {
    step (newValue:number, oldValue:number) {
      // set animation name
      this.animation = newValue > oldValue ? 'up' : 'down'
      // stop change sections
      if (!isNaN(this.animationFlagTimeOut)) {
        // clear time out for old navigate
        clearTimeout(this.animationFlagTimeOut)
      }
      this.isAnimation = true
      this.animationFlagTimeOut = setTimeout(() => {
        this.isAnimation = false
      }, 1000)
      // change button position
      this.$nuxt.$emit('change-button-position', {
        y: newValue === 2 ? 'up' : 'down'
      })
      // change url hash on navigate
      // @ts-ignore
      this.$router.push({ ...this.$route, hash: this.routerHash[newValue] })
    },
    '$route.fullPath' () {
      const hash = this.$route.hash
      if (hash) {
        this.$nextTick(() => {
          this.step = Number(Object.entries(this.routerHash).find(item => item[1] === hash)?.[0] || 1)
        })
      } else {
        this.step = 1
      }
    }
  },
  created () {
    const hash = this.$route.hash
    if (hash) {
      this.$nextTick(() => {
        const step = Number(Object.entries(this.routerHash).find(item => item[1] === hash)?.[0] || 1)
        if (step && step !== 1) {
          this.step = step
        }
      })
    }
  },
  methods: {
    nextSection () {
      if (!this.isAnimation) {
        this.step++
      }
    },
    previousSection () {
      if (!this.isAnimation && this.step > 1) {
        this.step--
      }
    }
  }
})
</script>

<style>

.down-enter-active, .down-leave-active {
  transition: 1000ms;
}
.down-enter{
  transform: translateY(-100%);
}
.down-enter-to, .down-leave {
  transform: translateY(0%);
}
.down-leave-to {
  transform: translateY(100%);
}

.up-enter-active, .up-leave-active {
  transition: 1000ms;
}
.up-enter{
  transform: translateY(100%);
}
.up-enter-to, .up-leave {
  transform: translateY(0%);
}
.up-leave-to {
  transform: translateY(-100%);
}

</style>
