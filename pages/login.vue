<template>
  <div
    class="absolute inset-0 flex h-full w-full flex-col-reverse overflow-hidden rounded-[25px] md:flex-row"
  >
    <div
      class="flex h-1/2 w-full items-center justify-center px-2 transition-all md:h-full md:w-1/2"
      :class="{ '!h-full': !isShowImageContainer }"
    >
      <div class="m-auto flex flex-col justify-center">
        <h1 class="mb-2 text-center text-xl font-bold text-white sm:text-3xl">
          {{ $t('title') }}
        </h1>
        <p class="text-center text-sm text-white sm:text-base">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <form
          autocomplete="off"
          class="mt-8 w-full max-w-[350px]"
          @submit.prevent
        >
          <transition
            mode="out-in"
            leave-active-class="transition-all ease-in-out duration-500"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
            enter-active-class="transition-all ease-in-out duration-500"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
          >
            <fieldset v-if="step === 1" class="w-full">
              <input
                ref="phoneNumberField"
                v-model.trim="phoneNumber"
                type="number"
                class="h-10 w-full appearance-none rounded-xl bg-[#F7F7F7] px-2 text-sm placeholder-[#B9B9B9] shadow-[inset_6px_5px_6px_rgba(0,0,0,0.5)] outline-none sm:h-12 sm:px-4 sm:text-base"
                :placeholder="$t('placeholder.phoneNumber')"
                @focus="onFocusField"
                @blur="onBlurField"
              >
              <span
                class="mb-1 mt-3 flex w-full justify-center rounded-lg bg-[#EC4444] p-0.5 text-sm font-bold text-white"
              >Lorem ipsum dolor</span>
            </fieldset>
            <fieldset v-else-if="step === 2" class="w-full">
              <input
                ref="phoneNumberField"
                v-model.trim="phoneNumber"
                type="number"
                class="h-10 w-full appearance-none rounded-xl bg-[#F7F7F7] px-2 text-sm placeholder-[#B9B9B9] shadow-[inset_6px_5px_6px_rgba(0,0,0,0.5)] outline-none sm:h-12 sm:px-4 sm:text-base"
                :placeholder="$t('placeholder.phoneNumber')"
                @focus="onFocusField"
                @blur="onBlurField"
              >
              <span
                class="mb-1 mt-3 flex w-full justify-center rounded-lg bg-[#EC4444] p-0.5 text-sm font-bold text-white"
              >Lorem ipsum dolor</span>
            </fieldset>
          </transition>
          <button
            type="submit"
            class="mt-2 flex h-10 w-full select-none items-center justify-evenly rounded-xl bg-brand-7 p-1 font-bold text-brand-3 transition-all hover:bg-brand-4 sm:h-12 sm:p-2"
            @click="step++"
          >
            <span class="text-sm sm:text-base"> {{ $t('button.signIn') }}</span>
          </button>
        </form>
      </div>
    </div>
    <transition
      leave-active-class="transition-all"
      leave-class="opacity-100 !md:h-full !h-1/2"
      leave-to-class="opacity-0 md:h-full h-0"
      enter-active-class="transition-all"
      enter-class="opacity-0 md:h-full h-0"
      enter-to-class="opacity-100 !md:h-full !h-1/2"
    >
      <div
        v-show="isShowImageContainer"
        class="flex h-1/2 w-full rounded-[25px] bg-white md:h-full md:w-1/2"
      >
        <Lottie
          path="/coilaco-login.json"
          :loop="true"
          :auto-play="true"
          :speed="1"
          :width="256"
          :height="256"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import tailwindConfig from '@/tailwind.config'
import lottie from '@/components/lottie.vue'

export default Vue.extend({
  name: 'LoginPage',
  components: { lottie },
  data: () => ({
    // flags
    isShowImageContainer: true,
    step: 1,
    // fields
    phoneNumber: '',
    code: ''
  }),
  computed: {
    breakPoint () {
      return this.$breakPoint
        ? this.$breakPoint(tailwindConfig.theme.screens)
        : {}
    }
  },
  created () {
    // autocomplate phone number field vie url query
    const queryTel = this.$route.query.tel || ''
    if (queryTel && typeof queryTel === 'string' && /^\d+$/.test(queryTel)) {
      this.phoneNumber = queryTel
    }
  },
  mounted () {
    // selection input value
    const phoneNumberField = this.$refs.phoneNumberField as HTMLInputElement
    if (phoneNumberField && this.phoneNumber) {
      phoneNumberField.select()
    }
  },
  methods: {
    onFocusField () {
      if (!this.breakPoint.md) {
        this.isShowImageContainer = false
      }
    },
    onBlurField () {
      this.isShowImageContainer = true
    }
  }
})
</script>

<i18n>
{
    "en": {
        "title": "Sign In",
        "button": {
            "signIn": "Sign In"
        },
        "placeholder": {
            "phoneNumber": "phone number"
        }
    },
    "fa": {
        "title": "ثبت نام",
        "button": {
            "signIn": "ورود"
        },
        "placeholder": {
            "phoneNumber": "شماره تلفن"
        }
    }
}
</i18n>
