<template>
  <div class="w-full">
    <swiper
      v-if="isReady"
      :modules="swiperModules"
      :slides-per-view="1"
      :speed="1800"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
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
          <img 
            :src="part.image" 
            class="absolute inset-0 w-full h-full object-cover opacity-40" 
            @error="(e) => e.target.style.display = 'none'"
          />
          
          <div class="relative z-10 text-center px-[20px] py-[40px] bg-[rgba(34,34,34,0.8)] rounded-xl border border-white/10 mx-4">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ part.name }}</h2>
            <p class="text-[var(--color-goldenrod)] text-lg md:text-xl max-w-[600px] leading-relaxed">
              {{ part.description }}
            </p>
            <button class="bg-[var(--color-racing)] mt-[30px] px-8 py-3 rounded-xl font-bold hover:scale-105 transition text-white uppercase tracking-wider">
              {{ part.cta }}
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div v-else class="h-[500px] w-full bg-[#111] flex items-center justify-center">
      <div class="animate-pulse text-[var(--color-racing)] font-bold italic">
        LOADING PERFORMANCE...
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const isReady = ref(false);
const swiperModules = [EffectFade, Navigation, Pagination, Autoplay];

const autoParts = [
  { id: 1, name: 'Performance Engines', description: 'Built with a precision-tuned Vue foundation and styled via Tailwind\'s utility-first performance. Our engines are engineered for zero-latency output and maximum reactive power.', cta: 'Look Under the Hood', image: '/bmw-motor.png' },
  { id: 2, name: 'Racing Tech', description: 'Engineering the edge. Our performance components are designed for those who demand precision, durability, and uncompromising speed on every corner.', cta: 'View Specs', image: '/engine-parts.png' },
  { id: 3, name: 'Heritage Blocks', description: 'Honoring the golden era of automotive power with components that bridge the gap between legacy and logic.', cta: 'View heritage collection', image: '/classic-v8.png' },
  { id: 4, name: 'Premium Service', description: 'From real-time monitoring to precision adjustments, we keep your machine running at peak efficiency with zero downtime.', cta: 'Book Your Consultation', image: '/serpentine-assembly.png' },
];

onMounted(() => {
  // Wait 150ms to ensure mobile layout engines (Safari/Chrome) have finished the first paint
  setTimeout(() => {
    isReady.value = true;
  }, 150);
});
</script>

<style scoped>
/* Ensure pagination dots are visible on mobile */
:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-racing, #e10600) !important;
  opacity: 1;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--color-racing, #e10600);
  transform: scale(0.7); /* Smaller arrows for mobile friendliness */
}

/* Fix for potential white-flash during fade transition */
.swiper-slide {
  background-color: #000;
}
</style>