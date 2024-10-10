<template>
  <div class="flex items-center gap-2">
    <div>
      <img :src="service.icon"
      :alt="service.title"/>
    </div>
    <div class="font-customFont">
      <h1 class="font-bold">{{service.title}}</h1>
      <h1>{{service.description}}</h1>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service:{
    required: true,
    type: Object
  }
})
</script>
