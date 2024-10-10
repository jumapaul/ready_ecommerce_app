<template>
  <div
      v-if="category"
      @click="handleClick"
      class="rounded-lg border-[1px] items-center justify-center flex flex-col font-customFont hover:border-red-600 hover:text-red-400 ">
    <img class="p-4 w-44 h-44 transform transition-transform duration-300 hover:scale-90"
         :src="category.image_url"
         :alt="category.category_title"/>
    <h1>{{ category.category_title }}</h1>
  </div>
</template>

<script setup>

const props = defineProps({
  category: {
    required: true,
    type: Object,
  },
})

const emit = defineEmits(['click'])

const handleClick = ()=>{
  emit('click', props.category)
}
</script>