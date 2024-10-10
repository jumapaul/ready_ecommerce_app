<script setup>

</script>

<template>
  <header class="flex justify-between text-gray-500 font-customFont">
    <div class="flex gap-6">
      <div class="flex gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg><span>Categories</span>

      </div>
      <div>
        <router-link :to="{name: 'home'}"
                     class="border-b-2 pb-2 border-transparent"
                     exact-active-class="border-[#7e22ce] text-[#7e22ce]">Home</router-link> |
        <router-link :to="{name: 'shops'}"
                     class="border-b-2 pb-2 border-transparent"
                     active-class="border-[#7e22ce] text-[#7e22ce]">Shops</router-link> |
        <router-link :to="{name: 'most_popular'}"
                     class="border-b-2 pb-2 border-transparent"
                     active-class="border-[#7e22ce] text-[#7e22ce]">Most Popular</router-link> |
        <router-link :to="{name: 'best_deals'}"
                     class="border-b-2 pb-2 border-transparent"
                     active-class="border-[#7e22ce] text-[#7e22ce]">Best Deal</router-link> |
        <router-link :to="{name: 'contact'}"
                     class="border-b-2 pb-2 border-transparent"
                     active-class="border-[#7e22ce] text-[#7e22ce]">Contact</router-link>
      </div>
    </div>

    <div class="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
      <span>Download app</span>
    </div>
  </header>
</template>
