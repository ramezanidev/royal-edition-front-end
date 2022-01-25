<template>
  <div class="relative">
    <!-- lable -->
    <div class="flex select-none items-center cursor-pointer" @click.stop="show = !show">
      <span
        class="
          uppercase
          pt-1
          flex
          px-2
          text-[18px]
          xl:text-[20px]
          text-white"
      >EN</span>
      <span class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
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
      <div v-show="show" class="absolute rounded-[15px] overflow-hidden bg-white min-w-[60px] top-full z-10">
        <div
          v-for="option in options"
          :key="option"
          :class="{'text-white bg-brand-4' : selected === option }"
          class="w-full cursor-pointer select-none text-center py-1 uppercase"
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
  props: {
    selected: {
      type: [String, Number, Boolean],
      required: true
    },
    options: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    onChange (value: string) {
      this.show = !this.show
      this.$emit('change', value)
    }
  }
})
</script>
