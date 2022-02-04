<template>
  <transition
    enter-active-class="transform transition-all"
    enter-class="ltr:-translate-x-full rtl:translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transform transition-all"
    leave-to-class="ltr:-translate-x-full rtl:translate-x-full"
    leave-class="translate-x-0"
  >
    <menu
      v-if="isShowSmallMenu"
      class="flex md:hidden fixed inset-0 z-10 transition-all"
      @click.self="closeSmallMenu"
    >
      <div class="bg-brand-3 bg-opacity-90 backdrop-blur-[20px] backdrop-filter w-3/4 shadow p-4 pt-0 relative">
        <div class="h-[70px] flex items-center justify-between">
          <button class="text-white" @click="closeSmallMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
              <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg>
          </button>
          <img src="/logo.png" class="w-40 select-none" draggable="false" alt="coilaco">
        </div>
        <div class="justify-center mt-4 gap-x-3 flex rtl:flex-row-reverse w-full">
          <!-- Account links -->
          <button>
            <svg
              width="26"
              height="30"
              viewBox="0 0 39 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3611 28.0833C6.7434 28.0833 3 31.8267 3 36.4444V40.625M36.4444 40.625V36.4444C36.4444 31.8267 32.701 28.0833 28.0833 28.0833H19.7222M19.7222 3C15.1045 3 11.3611 6.7434 11.3611 11.3611C11.3611 15.9788 15.1045 19.7222 19.7222 19.7222C24.3399 19.7222 28.0833 15.9788 28.0833 11.3611C28.0833 9.83819 27.6762 8.41036 26.9648 7.18056"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <!-- change Lang -->
          <UtilityAppSelect :selected="$i18n.locale" :options="$i18n.locales.map((x) => x.code)" @change="$router.push(switchLocalePath($event))" />
        </div>
        <!-- divider -->
        <div class="w-full my-6 h-0 border border-white opacity-50" />
        <!-- nav items -->
        <nav
          class="flex gap-y-4 flex-col text-white text-[18px] xl:text-[20px]"
        >
          <NuxtLink
            v-for="link in navBarLinks"
            :key="link.href"
            class="select-none nav-item"
            draggable="false"
            :to="localePath(link.href, $i18n.locale)"
          >
            <span>{{ link.lable }}</span>
          </NuxtLink>
        </nav>
        <!-- CopyRight LICENSE -->
        <p class="text-white absolute bottom-0 p-4 font-light w-full rtl:text-left inset-x-0" dir="ltr">
          Licensed by <a href="https://coilaco.com" class="mx-1" target="_blank" rel="noopener noreferrer"><strong class="font-bold">Coilaco</strong></a>
        </p>
      </div>
    </menu>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import nav from '@/mixins/nav'

export default Vue.extend({
  name: 'LayoutAppSmMenu',
  mixins: [nav],
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isShowSmallMenu: {
      get ():boolean {
        return this.value
      },
      set (value: boolean) {
        this.$emit('input', value)
      }
    }
  },
  watch: {
    '$route.fullPath' () {
      this.closeSmallMenu()
    }
  },
  methods: {
    closeSmallMenu () {
      this.isShowSmallMenu = false
    }
  }
})
</script>

<style scoped>
.nav-item.nuxt-link-exact-active > span{
  @apply border-b-[3px] border-brand-4;
}
</style>
