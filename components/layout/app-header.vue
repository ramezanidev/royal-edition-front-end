<template>
  <header
    class="flex h-[70px] items-center justify-between rtl:flex-row-reverse md:h-[75px] xl:h-[80px] 2xl:h-[100px]"
  >
    <div>
      <NuxtLink :to="localePath('/')">
        <img
          v-show="!isShowSmallMenu"
          src="/logo.png"
          class="w-40 select-none"
          draggable="false"
          alt="coilaco"
        >
      </NuxtLink>
    </div>
    <div class="hidden md:block">
      <nav
        class="flex gap-x-2 text-[16px] lg:gap-x-6 lg:text-[18px] xl:gap-x-8 xl:text-[20px]"
      >
        <NuxtLink
          v-for="link in navBarLinks"
          :key="link.href"
          class="nav-item select-none text-white transition-all hover:text-opacity-70"
          draggable="false"
          :to="localePath(link.href, $i18n.locale)"
        >
          {{ link.lable }}
        </NuxtLink>
      </nav>
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
            class="stroke-white transition-all group-hover:stroke-brand-4"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <UtilityAppSelect
        :dark-mode="false"
        :selected="$i18n.locale"
        :options="$i18n.locales.map((x) => x.code)"
        @change="$router.push(switchLocalePath($event))"
      />
    </div>
    <!-- show small menu -->
    <div v-show="!isShowSmallMenu" class="flex md:hidden">
      <button class="text-white" @click="isShowSmallMenu = true">
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

    <LayoutAppSmMenu v-model="isShowSmallMenu" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import nav from '@/mixins/nav'

export default Vue.extend({
  name: 'LayoutAppHeader',
  mixins: [nav],
  data: () => ({
    isShowSmallMenu: false
  })
})
</script>

<style scoped>
.nav-item.nuxt-link-exact-active {
  @apply border-b-[3px] border-brand-4;
}
</style>
