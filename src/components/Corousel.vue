<template>
  <div
      class="grid sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-1 xl:grid-rows-1 grid-flow-col w-full gap-4 xl:h-[700px] lg:h-[700px]">
    <div
        class="row-span-3 lg:col-span-1 xl:col-span-1 sm:col-span-full lg:w-[1300px] xl:w-[1300px] md:w-full sm:w-full bg-green-500">
      <transition-group
          name="fade" tag="div">
        <div v-for="i in [currentIndex]" :key="i"
             class="w-full bg-green-400">
          <img
              v-if="currentImage"
              :src="currentImage.image_url"
              :alt="currentIndex"
              class="h-[700px] w-full object-fill"/>

          <img
              v-else src="/img_one.jpg"
              alt="fallback"
              class="h-[700px] w-full object-fill">
        </div>
      </transition-group>
    </div>

    <div class="lg:col-span-2 xl:col-span-2 sm:col-span-full xl:w-[500px] lg:w-[500px] sm:w-full h-full">
      <img src="https://demo.readyecommerce.app/storage/ads/fRQCnK1KVbFWKOrGGPAUnca3fQVCiVLh2R1rWz0g.png"
           alt="image1"
           class="h-full xl:w-[500px] lg:w-[500px] md:w-full sm:w-full object-fill rounded-lg"/>
    </div>

    <div
        class="lg:col-span-2 xl:col-span-2 sm:col-span-full row-span-2 h-full col-span-2 lg:w-[500px] xl:w-[500px] sm:w-full md:w-full">
      <img src="https://demo.readyecommerce.app/storage/ads/5TIyxtJkZ932NRs6GxbUxkhPTAdl5cYEDEBoUmGQ.png"
           alt="image1"
           class="h-full xl:w-[500px] lg:w-[500px] sm:w-full md:w-full object-fill rounded-lg"/>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'slider',
  data() {
    return {
      timer: null,
      currentIndex: 0,
    };
  },
  computed: {
    ...mapState({
      images: state => state.slidingImages
    }),
    currentImage: function () {
      return this.images.length > 0
          ? this.images[Math.abs(this.currentIndex) % this.images.length]
          : null
    }
  },
  mounted: function () {
    this.startSlide();
    this.$store.dispatch('fetchSlidingImages');
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.nextSlide, 50000);
    },
    nextSlide: function () {
      this.currentIndex += 1;
    },
    prevSlide: function () {
      this.currentIndex -= 1;
    }
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
};
</script>