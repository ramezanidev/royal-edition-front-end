<template>
  <div
    class="absolute inset-0 h-full w-full overflow-hidden rounded-[25px] p-[40px] xl:px-[60px] 2xl:px-[80px]"
  >
    <transition :name="animation">
      <MainPageIntroduction v-show="step === 1" @next="nextSection" />
    </transition>
    <transition :name="animation">
      <MainPageServices
        v-show="step === 2"
        @previous="previousSection"
        @next="nextSection"
      />
    </transition>
    <transition :name="animation">
      <MainPageAboutUs v-show="step === 3" @previous="previousSection" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    animation: 'down',
    animationFlagTimeOut: null as any,
    routerHash: {
      1: '',
      2: '#services',
      3: '#about-us'
    }
  }),
  computed: {
    step: {
      /* active section */
      set (value) {
        this.$store.commit('mainPageStep/setStep', value)
      },
      get (): number {
        return this.$store.getters['mainPageStep/step']
      }
    },
    isAnimation: {
      set (value: boolean) {
        this.$store.commit('mainPageStep/setAnimation', value)
      },
      get (): boolean {
        return this.$store.getters['mainPageStep/isAnimation']
      }
    }
  },
  watch: {
    step (newValue: number, oldValue: number) {
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
      const positon = {
        rotate: newValue === 3 ? 'up' : 'down'
      }
      this.$store.commit('scrollToButton/changePosition', positon)
      // change url hash on navigate
      // @ts-ignore
      this.$router.push({ ...this.$route, hash: this.routerHash[newValue] })
    },
    '$route.fullPath' () {
      const hash = this.$route.hash
      if (hash) {
        this.$nextTick(() => {
          this.step = Number(
            Object.entries(this.routerHash).find(
              item => item[1] === hash
            )?.[0] || 1
          )
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
        const step = Number(
          Object.entries(this.routerHash).find(
            item => item[1] === hash
          )?.[0] || 1
        )
        if (step && step !== 1) {
          this.step = step
        }
      })
    }
  },
  methods: {
    nextSection () {
      this.$store.commit('mainPageStep/increase')
    },
    previousSection () {
      this.$store.commit('mainPageStep/dicrease')
    }
  }
})
</script>

<style>
.down-enter-active,
.down-leave-active {
  transition: 1000ms;
}
.down-enter {
  transform: translateY(-100%);
}
.down-enter-to,
.down-leave {
  transform: translateY(0%);
}
.down-leave-to {
  transform: translateY(100%);
}

.up-enter-active,
.up-leave-active {
  transition: 1000ms;
}
.up-enter {
  transform: translateY(100%);
}
.up-enter-to,
.up-leave {
  transform: translateY(0%);
}
.up-leave-to {
  transform: translateY(-100%);
}
</style>
