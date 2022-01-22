<template>
  <header class="flex justify-between h-[100px] items-center">
    <div>
      <span class="text-[#BBE1FA] text-[30px]">Logooo</span>
    </div>
    <div>
      <nav class="flex gap-x-5 xl:gap-x-8 text-white text-[18px] xl:text-[20px]">
        <NuxtLink v-for="link in navBarLinks" :key="link.href" class="nav-item select-none" draggable="false" :to="link.href">
          {{ link.lable }}
        </NuxtLink>
      </nav>
    </div>
    <div class="flex items-center gap-x-3">
      <button>
        <svg width="26" height="30" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3611 28.0833C6.7434 28.0833 3 31.8267 3 36.4444V40.625M36.4444 40.625V36.4444C36.4444 31.8267 32.701 28.0833 28.0833 28.0833H19.7222M19.7222 3C15.1045 3 11.3611 6.7434 11.3611 11.3611C11.3611 15.9788 15.1045 19.7222 19.7222 19.7222C24.3399 19.7222 28.0833 15.9788 28.0833 11.3611C28.0833 9.83819 27.6762 8.41036 26.9648 7.18056" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <select class="outline-none uppercase cursor-pointer flex pt-2 px-2 text-[18px] xl:text-[20px] bg-transparent text-white" @change="$router.push(switchLocalePath($event.target.value))">
        <option
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :value="locale.code"
          :selected="locale.code === $i18n.locale"
        >
          {{ locale.code }}
        </option>
      </select>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutAppHeader',
  data: () => ({
    navBarLinks: [
      {
        lable: 'Main page',
        href: '/'
      },
      {
        lable: 'Serveces',
        href: '#serveces'
      },
      {
        lable: 'About us',
        href: '#about-us'
      },
      {
        lable: 'Calculator',
        href: '/calculator'
      },
      {
        lable: 'Mag',
        href: '/mag'
      },

      {
        lable: 'Contact us',
        href: '/contact-us'
      }
    ]
  })
})
</script>

<style scoped>
    .nav-item.nuxt-link-exact-active {
        @apply border-b-[3px] border-brand-4;
    }
</style>
