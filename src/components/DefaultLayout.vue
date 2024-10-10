<template>
  <div>
    <header
        class="font-customFont">
      <div class="flex text-white p-1 pl-4 items-center"
           style="background-color: #7e22ce">
        <router-link :to="{}" class="pr-2">Become a seller</router-link>
        <span class="text-red-400">|</span>
        <h1 class="ml-8">Hotline: 01963953998</h1>
      </div>
      <div class="p-2 flex items-center">
        <img src="https://demo.readyecommerce.app/assets/logo.png"
             alt="logo"
             class="h-10 w-40">

        <form class="flex items-center w-full ml-[50px] sm:ml-[10px] md:ml-[50px] lg:ml-[100px] xl:ml-[150px]">
          <div class="relative w-full">
            <input
                type="text"
                id="search"
                class="border text-gray-900 rounded-lg block p-3 focus:outline-none focus:border-[#7e22ce] focus:ring-1 focus:ring-[#7e22ce] w-full"
                placeholder="Search"
                required/>
            <button
                type="button"
                class="absolute inset-y-0 end-0 flex, items-center pe-3">

              <svg
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5 text-gray-900 dark:text-gray-400 dark:hover:text-red-700">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
              </svg>

            </button>

          </div>
        </form>

        <div class="flex gap-1 sm:gap-1 md:gap-2 items-center ml-[100px] sm:ml-[100px] md:ml-[200px] lg:ml-[300px] xl:ml-[400px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
          </svg>
          <span
              id="favorite-count"
              class="absolute -mt-4 ml-4 rounded-full bg-red-500 text-white p-0.5 leading-none">0</span>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
          </svg>
          <span
          id="store-count"
          class="absolute -mt-4 ml-12 rounded-full bg-red-500 text-white p-0.5 leading-none"
          >0</span>

          <div class="flex gap-1 ml-4 mr-2 md:mr-3 lg:mr-12 xl:mr-24 hover:text-[#7e22ce]">
            <h3>
              Login
            </h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>
          </div>
        </div>

      </div>
      <div class="border-t border-gray-200"></div>
    </header>

    <main>
      <NavBar class="p-4"/>
      <div class="border-t border-gray-200"></div>
      <router-view/>
    </main>
  </div>
</template>

<script setup>

import NavBar from "./NavBar.vue";
</script>
