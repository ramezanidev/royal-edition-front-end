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
      class="flex md:hidden fixed inset-0 bg-black bg-opacity-30 z-10"
      @click.self="closeSmallMenu"
    >
      <div class="bg-brand-3 bg-opacity-90 backdrop-blur-[20px] backdrop-filter w-3/4 shadow p-4 relative">
        <div class="h-[70px]">
          1
        </div>
        <div class="justify-center mt-2 gap-x-3 flex rtl:flex-row-reverse w-full">
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
          <select
            class="
          outline-none
          uppercase
          cursor-pointer
          flex
          pt-2
          px-2
          text-[18px]
          xl:text-[20px]
          bg-transparent
          text-white
        "
            @change="$router.push(switchLocalePath($event.target.value))"
          >
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
        <!-- divider -->
        <div class="w-full my-6 h-0 border border-white opacity-50" />
        <!-- nav items -->
        <nav
          class="flex gap-y-4 flex-col text-white text-[18px] xl:text-[20px]"
        >
          <NuxtLink
            v-for="link in navBarLinks"
            :key="link.href"
            class="select-none"
            draggable="false"
            :to="localePath(link.href, $i18n.locale)"
          >
            {{ link.lable }}
          </NuxtLink>
        </nav>
        <!-- CopyRight LICENSE -->
        <p class="text-white absolute bottom-0 p-4 font-light w-full rtl:text-left inset-x-0">
          Licensed by <strong class="font-bold">Coilaco</strong>
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
  methods: {
    closeSmallMenu () {
      this.isShowSmallMenu = false
    }
  }
})
</script>

<style scoped>
.nav-item.nuxt-link-exact-active {
  @apply border-b-[3px] border-brand-4;
}
</style>
