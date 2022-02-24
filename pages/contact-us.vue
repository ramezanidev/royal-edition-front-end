<template>
  <div
    class="absolute inset-0 flex h-full w-full overflow-hidden rounded-[25px]"
  >
    <div
      dir="ltr"
      class="absolute inset-x-0 bottom-0 h-1/2 translate-y-full transform-cpu bg-[#F4FDFF] p-8 pt-1 transition-all duration-500 ease-in-out will-change-transform md:relative md:inset-x-auto md:bottom-auto md:h-full md:w-2/5 md:transform-none md:rounded-[25px] md:pt-8"
      :class="{ '!translate-y-0': isShowPopUp }"
    >
      <div
        class="absolute inset-x-0 top-1 flex h-6 w-full -translate-y-full transform-cpu rounded-t-[15px] bg-[#F4FDFF] md:hidden"
      >
        <button
          class="mx-auto flex h-8 w-20 -translate-y-1/2 transform-cpu items-center justify-center rounded-t-[15px] bg-[#F4FDFF]"
          @click="isShowPopUp = !isShowPopUp"
        >
          <svg
            class="h-6 w-6 rotate-0 transform-cpu will-change-transform"
            :class="{ 'rotate-180': isShowPopUp }"
            viewBox="0 0 42 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-brand-6"
              d="M17.8304 2.11746C19.4316 0.0374341 22.5684 0.0374312 24.1696 2.11746L40.2912 23.06C42.316 25.6903 40.4409 29.5 37.1216 29.5H4.87841C1.55905 29.5 -0.316002 25.6903 1.70879 23.06L17.8304 2.11746Z"
            />
          </svg>
        </button>
      </div>
      <div
        class="w-full rounded-md bg-brand-6 px-2 py-1 text-center text-white"
      >
        Dolor delectus provident adipisci
      </div>
      <ul class="mt-10 space-y-4 md:space-y-10">
        <!-- email -->
        <li class="flex items-center font-bold text-brand-6">
          <svg
            class="w-10 md:w-14"
            viewBox="0 0 58 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="stroke-brand-6"
              d="M4.43946 4.44621L8.75783 8.7072M53.3811 4.44621L32.9817 24.5745C30.7331 26.7932 27.0874 26.7932 24.8389 24.5745L15.9551 15.8088M46.1838 42.7951H51.9416C53.5316 42.7951 54.8205 41.5233 54.8205 39.9545V5.86654C54.8205 4.29769 53.5316 3.02588 51.9416 3.02588H5.87892C4.28894 3.02588 3 4.29769 3 5.86654V39.9545C3 41.5233 4.28894 42.7951 5.87892 42.7951H34.6681"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <a class="mx-2 md:mx-4 lg:text-xl" href="#">info@coilaco.com</a>
        </li>
        <!-- whatsapp -->
        <li class="flex items-center font-bold text-brand-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 fill-current md:w-14"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
            />
          </svg>
          <a class="mx-2 md:mx-4 lg:text-xl" href="#">0915 203 1353</a>
        </li>
        <!-- instagram -->
        <li class="flex items-center font-bold text-brand-6">
          <svg
            class="w-10 fill-current md:w-14"
            viewBox="0 0 58 58"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="stroke-brand-6"
              d="M28.8854 5.4356C36.5978 5.4356 37.5125 5.46449 40.5599 5.6041C48.3879 5.96035 52.0443 9.67454 52.4006 17.4447C52.5402 20.4897 52.5666 21.4044 52.5666 29.1168C52.5666 36.8316 52.5378 37.7439 52.4006 40.7889C52.0419 48.5519 48.3951 52.2733 40.5599 52.6296C37.5125 52.7692 36.6026 52.7981 28.8854 52.7981C21.173 52.7981 20.2583 52.7692 17.2133 52.6296C9.3661 52.2709 5.72894 48.5399 5.37269 40.7865C5.23308 37.7415 5.20419 36.8292 5.20419 29.1144C5.20419 21.402 5.23548 20.4897 5.37269 17.4423C5.73135 9.67454 9.37813 5.95795 17.2133 5.60169C20.2607 5.46449 21.173 5.4356 28.8854 5.4356ZM28.8854 0.229004C21.0406 0.229004 20.0585 0.262704 16.9774 0.402316C6.48718 0.88374 0.657143 6.70415 0.17572 17.204C0.0336997 20.2875 0 21.2696 0 29.1144C0 36.9592 0.0336997 37.9437 0.173313 41.0248C0.654736 51.5151 6.47515 57.3451 16.975 57.8265C20.0585 57.9661 21.0406 57.9998 28.8854 57.9998C36.7302 57.9998 37.7147 57.9661 40.7958 57.8265C51.2764 57.3451 57.1209 51.5247 57.5951 41.0248C57.7371 37.9437 57.7708 36.9592 57.7708 29.1144C57.7708 21.2696 57.7371 20.2875 57.5975 17.2064C57.1257 6.72582 51.2981 0.886147 40.7982 0.404724C37.7147 0.262704 36.7302 0.229004 28.8854 0.229004V0.229004ZM28.8854 14.2818C20.694 14.2818 14.0528 20.923 14.0528 29.1144C14.0528 37.3058 20.694 43.9495 28.8854 43.9495C37.0768 43.9495 43.7181 37.3083 43.7181 29.1144C43.7181 20.923 37.0768 14.2818 28.8854 14.2818ZM28.8854 38.7429C23.5681 38.7429 19.2569 34.4342 19.2569 29.1144C19.2569 23.7971 23.5681 19.4859 28.8854 19.4859C34.2027 19.4859 38.5139 23.7971 38.5139 29.1144C38.5139 34.4342 34.2027 38.7429 28.8854 38.7429ZM44.3054 10.2306C42.3894 10.2306 40.8368 11.7832 40.8368 13.6968C40.8368 15.6105 42.3894 17.1631 44.3054 17.1631C46.2191 17.1631 47.7693 15.6105 47.7693 13.6968C47.7693 11.7832 46.2191 10.2306 44.3054 10.2306Z"
            />
          </svg>
          <a class="mx-2 md:mx-4 lg:text-xl" href="#">coilaco.fa</a>
        </li>
      </ul>
    </div>
    <div
      class="w-full p-[40px] px-4 sm:px-6 md:w-3/5 md:px-8 xl:px-[60px] 2xl:px-[80px]"
    >
      <h1 class="text-4xl font-extrabold text-white">
        {{ $t('title') }}
      </h1>
      <br>
      <form class="space-y-6" @submit.prevent>
        <fieldset class="w-full md:max-w-[520px]">
          <input
            ref="phoneNumberField"
            v-model.trim="field.name"
            type="name"
            class="h-10 w-full appearance-none rounded-xl bg-[#F7F7F7] px-2 text-sm placeholder-[#B9B9B9] shadow-[inset_6px_5px_6px_rgba(0,0,0,0.5)] outline-none sm:h-12 sm:px-4 sm:text-base"
            :placeholder="$t('placeholder.name')"
          >
          <span
            class="mb-1 mt-1 flex w-full justify-center rounded-lg bg-[#EC4444] p-0.5 text-sm font-bold text-white"
          >Lorem ipsum dolor</span>
        </fieldset>
        <fieldset class="w-full md:max-w-[520px]">
          <input
            ref="phoneNumberField"
            v-model.trim="field.phoneNumber"
            type="number"
            class="h-10 w-full appearance-none rounded-xl bg-[#F7F7F7] px-2 text-sm placeholder-[#B9B9B9] shadow-[inset_6px_5px_6px_rgba(0,0,0,0.5)] outline-none sm:h-12 sm:px-4 sm:text-base"
            :placeholder="$t('placeholder.phoneNumber')"
          >
          <span
            class="mb-1 mt-1 flex w-full justify-center rounded-lg bg-[#EC4444] p-0.5 text-sm font-bold text-white"
          >Lorem ipsum dolor</span>
        </fieldset>
        <fieldset class="w-full md:max-w-[520px]">
          <textarea
            ref="phoneNumberField"
            v-model.trim="field.message"
            rows="4"
            class="w-full resize-none appearance-none rounded-xl bg-[#F7F7F7] py-2 px-2 text-sm placeholder-[#B9B9B9] shadow-[inset_6px_5px_6px_rgba(0,0,0,0.5)] outline-none sm:px-4 sm:text-base"
            :placeholder="$t('placeholder.message')"
          />
          <span
            class="mb-1 mt-1 flex w-full justify-center rounded-lg bg-[#EC4444] p-0.5 text-sm font-bold text-white"
          >Lorem ipsum dolor</span>
        </fieldset>
        <button
          type="submit"
          class="mt-2 flex h-10 w-full select-none items-center justify-evenly rounded-xl bg-brand-7 p-1 font-bold text-brand-3 transition-all hover:bg-brand-4 sm:h-12 sm:p-2 md:w-32"
        >
          <span class="text-sm sm:text-base"> {{ $t('submit') }}</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import tailwindConfig from '@/tailwind.config'

export default Vue.extend({
  name: 'ContactUsPage',
  data: () => ({
    // flags
    isShowPopUp: false,
    // fields
    field: {
      name: '',
      phoneNumber: '',
      message: ''
    }
  }),
  computed: {
    breakPoint () {
      return this.$breakPoint
        ? this.$breakPoint(tailwindConfig.theme.screens)
        : {}
    }
  },
  created () {},
  mounted () {},
  methods: {}
})
</script>

<i18n>
{
    "en": {
      "title": "Contact us",
      "placeholder": {
        "name": "Name",
        "phoneNumber": "Phone Number",
        "message": "Message"
      },
      "submit": "submit"
    },
    "fa": {
      "title": "ارتباط با ما",
      "placeholder": {
        "name": "نام",
        "phoneNumber": "شماره تلفن",
        "message": "پیام"
      },
      "submit": "ارسال"
    }
}
</i18n>
