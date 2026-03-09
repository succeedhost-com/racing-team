<template>
  <div class="w-full">
    <swiper
      :modules="swiperModules"
      :slides-per-view="1"
      :speed="1800"
      :fade-effect="{ crossFade: true }",
      :loop="true"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="h-[500px] w-full"
    >
      <swiper-slide v-for="part in autoParts" :key="part.id">
        <div class="relative w-full h-full flex items-center justify-center bg-[var(--color-carbon)]">
          <img :src="part.image" class="absolute inset-0 w-full h-full object-cover opacity-40" />
          
          <div class="relative z-10 text-center px-[20px] py-[20px] bg-[rgba(34,34,34,0.7)] rounded-xl">
            <h2 class="text-5xl font-bold text-[var(--color-white)] mb-4">{{ part.name }}</h2>
            <p class="text-[var(--color-goldenrod)] text-xl max-w-[600px]">{{part.description}}</p>
            <button class="bg-[var(--color-racing)] mt-[30px] px-8 py-3 rounded-xl font-bold hover:scale-105 transition text-white">
              {{ part.cta }}
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// 1. You MUST import these modules for the animation to work
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper/modules';

// 2. You MUST import the CSS for these modules or they won't appear
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// 3. Define the modules to be used in the template
const swiperModules = [EffectFade, Navigation, Pagination, Autoplay];

const autoParts = [
  { id: 1, name: 'Performance Engines', description: 'Built with a precision-tuned Vue foundation and styled via Tailwind\'s utility-first performance. Our engines are engineered for zero-latency output and maximum reactive power.', cta: 'Look Under the Hood', image: '/bmw-motor.png' }, // Adjusted path
  { id: 2, name: 'Racing Tech', description: 'Engineering the edge. Our performance components are designed for those who demand precision, durability, and uncompromising speed on every corner.', cta: 'View Specs', image: '/engine-parts.png' },    // Adjusted path
  { id: 3, name: 'Heritage Blocks', description: 'Honoring the golden era of automotive power with components that bridge the gap between legacy and logic.', cta: 'View heritage collection', image: '/classic-v8.png' }, // Adjusted path
  { id: 4, name: 'Premium Service', description: 'From real-time monitoring to precision adjustments, we keep your machine running at peak efficiency with zero downtime.', cta: 'Book Your Consultation',image: '/serpentine-assembly.png' }, // Adjusted path

];
</script>

<style scoped>
/* Optional: Customize pagination dots to match your 'racing' color */
:deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-racing) !important;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--color-racing);
}
</style>