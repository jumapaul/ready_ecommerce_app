<template>

  <div
      class="p-4">
    <div
        v-if="categoryProducts.length!==0"
        class="gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <CategoryProduct
          v-for="product in categoryProducts"
          :key="product.id"
          :product="product"/>

    </div>

    <div v-else>
      <h1>No product found</h1>
    </div>
  </div>

</template>

<script setup>

import {computed, onMounted} from "vue";
import store from "../store/index.js";
import {useRoute} from "vue-router";
import CategoryProduct from "../components/CategoryProduct.vue";

const route = useRoute()
const categoryTitle = route.params.category_title.toLowerCase()
const categoryProducts = computed(() => store.state.categoryProducts)

onMounted(() => {
  store.dispatch('fetchCategoryProducts', categoryTitle)
})
</script>

