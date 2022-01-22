<template>
  <div class="bg-brand-3 h-screen px-[50px] pb-[50px] flex flex-col">
    <LayoutAppHeader />
    <div class="rounded-[25px] flex-auto flex items-center relative p-[40px] xl:p-[50px] bg-gradient-radial from-brand-1 to-brand-2 overflow-hidden" style="height:calc(100% - 100px)">
      <Nuxt />
    </div>
  </div>
</template>
