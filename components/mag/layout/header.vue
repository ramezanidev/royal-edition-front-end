<template>
  <header
    class="fixed inset-x-0 top-0 z-10 flex h-16 w-full items-stretch justify-between bg-white p-2 px-2 transition-colors rtl:flex-row-reverse dark:bg-brand-mag-1 sm:px-3 md:px-4 lg:px-6"
  >
    <div v-show="!isShowSmallMenu">
      <NuxtLink :to="localePath('/')">
        <img
          :src="darkMode ? `/mag/dark-mag.png` : `/mag/light-mag.png`"
          class="w-40 select-none"
          draggable="false"
          alt="coilaco"
        >
      </NuxtLink>
    </div>
    <div class="hidden items-center md:flex">
      <nav class="flex gap-x-2 text-[16px] lg:gap-x-6 lg:text-[18px]">
        <NuxtLink
          v-for="link in navBarLinks"
          :key="link.href"
          class="nav-item select-none text-black transition-all hover:text-opacity-70 dark:text-white"
          draggable="false"
          :to="localePath(link.href, $i18n.locale)"
        >
          {{ link.lable }}
        </NuxtLink>
      </nav>
    </div>
    <div
      v-show="!isShowSmallMenu"
      class="flex items-center gap-x-2 rtl:flex-row-reverse"
    >
      <!-- dark light -->
      <div
        class="group relative mx-1 h-5 w-10 overflow-hidden rounded-full border border-brand-mag-5 transition-colors dark:border-brand-mag-3"
      >
        <input
          v-model="darkMode"
          type="checkbox"
          class="peer absolute inset-0 z-[1] h-full w-full cursor-pointer opacity-0"
        >
        <span
          class="absolute top-1 left-1 flex h-2.5 w-2.5 rounded-full bg-brand-mag-5 transition-all duration-300 ease-in group-hover:bg-brand-mag-4 peer-checked:left-[1.45rem] dark:bg-white"
        />
      </div>
      <div class="hidden items-center gap-x-3 rtl:flex-row-reverse md:flex">
        <button class="group">
          <svg
            width="26"
            height="30"
            viewBox="0 0 39 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3611 28.0833C6.7434 28.0833 3 31.8267 3 36.4444V40.625M36.4444 40.625V36.4444C36.4444 31.8267 32.701 28.0833 28.0833 28.0833H19.7222M19.7222 3C15.1045 3 11.3611 6.7434 11.3611 11.3611C11.3611 15.9788 15.1045 19.7222 19.7222 19.7222C24.3399 19.7222 28.0833 15.9788 28.0833 11.3611C28.0833 9.83819 27.6762 8.41036 26.9648 7.18056"
              class="stroke-brand-mag-5 transition-all group-hover:stroke-brand-4 dark:stroke-white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <UtilityAppSelect
          :selected="$i18n.locale"
          :options="$i18n.locales.map((x) => x.code)"
          @change="$router.push(switchLocalePath($event))"
        />
      </div>
      <div class="flex md:hidden">
        <button
          class="text-brand-mag-5 transition-colors dark:text-white"
          @click="isShowSmallMenu = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </div>
    <MagLayoutSmallMenu v-model="isShowSmallMenu" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import nav from '@/mixins/mag/nav'
import MagLayoutSmallMenu from '@/components/mag/layout/small-menu.vue'

export default Vue.extend({
  components: {
    MagLayoutSmallMenu
  },
  mixins: [nav],
  data: () => ({
    isShowSmallMenu: false
  }),
  computed: {
    darkMode: {
      get () {
        return this.$store.getters.darkMode as boolean
      },
      set (newValue: boolean) {
        this.$store.commit('setDarkMode', newValue)
      }
    }
  }
})
</script>

<style scoped>
.nav-item.nuxt-link-exact-active {
  @apply border-b-[3px] border-brand-4;
}
</style>
