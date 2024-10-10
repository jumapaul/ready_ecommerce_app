<template>
  <div
      class="rounded-lg border-[1px] items-center justify-center hover:border-red-600 font-customFont xl:w-80 lg:w-60 md:w-40 sm:w-20 p-4"
      v-if="product"
      @click="handleClick">

    <img
        class="p-4 xl:size-60 lg:size:40 md:size-20 transition-transform duration-300 hover:scale-90"
        :src="product.image"
        :alt="product.id">

    <h1
    class="truncate whitespace-nowrap">{{ product.title }}</h1>

    <h1 class="text-red-400">$ {{ product.price }}</h1>

    <div class="flex justify-between">
      <div class="flex items-center justify-items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
        <h1>{{product.rating.rate}}</h1>
      </div>

      <div>
        <h1 class="text-gray-500">{{product.rating.count}} Sold</h1>
      </div>
    </div>
    <div class="flex items-center mt-6 gap-1">
      <div class="rounded-lg border-[1px] border-gray-500 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      </div>


      <button class="w-full rounded-lg border-[1px] border-red-600 p-2">
        Buy now
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    required: true,
    type: Object
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.product)
}
</script>
