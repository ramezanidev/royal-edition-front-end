<template>
  <div class="relative">
    <!-- lable -->
    <div
      class="flex cursor-pointer select-none items-center"
      @click.stop="show = !show"
    >
      <span
        class="flex px-2 pt-1 text-[18px] uppercase text-white xl:text-[20px]"
      >{{ selected }}</span>
      <span class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </span>
      <!-- options -->
    </div>
    <transition
      enter-active-class="transform transition-all duration-300"
      enter-class="translate-y-[8px] opacity-0"
      enter-to-class="translate-y-0 opacity-1"
      leave-active-class="transform transition-all duration-150"
      leave-to-class="translate-y-[8px] opacity-0"
      leave-class="translate-y-0 opacity-1"
    >
      <div
        v-if="show"
        v-click-outside="close"
        class="absolute top-full z-10 min-w-[60px] overflow-hidden rounded-[15px] bg-white"
      >
        <div
          v-for="option in options"
          :key="option"
          :class="{ 'bg-brand-4 text-white': selected === option }"
          class="w-full cursor-pointer select-none py-1 text-center uppercase"
          @click="onChange(option)"
        >
          {{ option }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  directives: {
    'click-outside': {
      bind (el, binding, vnode) {
        // @ts-ignore
        (el as HTMLElement).clickOutsideEvent = function (event) {
          // here I check that click was outside the el and his childrens
          if (!(el === event.target || el.contains(event.target as any))) {
            // @ts-ignore
            vnode.context?.[binding.expression](event)
          }
        }
        // @ts-ignore
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind (el) {
        // @ts-ignore
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  },
  props: {
    selected: {
      type: [String, Number, Boolean],
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    onChange (value: string) {
      this.show = !this.show
      this.$emit('change', value)
    },
    close () {
      this.show = false
    }
  }
})
</script>
