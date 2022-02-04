<template>
  <div
    class="
      w-full
      h-full
      overflow-hidden
      absolute
      inset-0
      rounded-[25px]
      flex flex-col-reverse
      md:flex-row
    "
  >
    <div
      class="md:w-1/2 w-full md:h-full h-1/2 flex justify-center items-center"
    >
      <div class="m-auto flex flex-col justify-center">
        <h1 class="text-white text-3xl font-bold text-center mb-2">
          {{ $t('title') }}
        </h1>
        <p class="text-center text-white">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <form autocomplete="off" class="mt-8 max-w-[350px] w-full" @submit.prevent>
          <fieldset class="w-full">
            <input
              type="number"
              class="
              w-full
              bg-[#F7F7F7]
              md:rounded-xl
              sm:h-12
              h-10
              px-2
              outline-none
              appearance-none
              shadow-[inset_6px_5px_6px_rgba(0,0,0,0.5)]
              placeholder-[#B9B9B9]
            "
              :placeholder="$t('placeholder.phoneNumber')"
            >
            <span class="text-red-500 text-sm font-bold my-1 flex">Lorem ipsum dolor</span>
          </fieldset>
          <button
            type="submit"
            class="
            mt-2
            bg-brand-7
            hover:bg-brand-4
            transition-all
            w-full
            flex
            items-center
            justify-evenly
            select-none
            rounded-xl
            sm:h-12
            h-10
            sm:p-2
            p-1
            text-brand-3
            font-bold
          "
          >
            <span class="text-sm sm:text-base"> {{ $t("button.signIn") }}</span>
          </button>
        </form>
      </div>
    </div>
    <div class="md:w-1/2 w-full md:h-full h-1/2 bg-white rounded-[25px] flex" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage'
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
