<script setup>
import { useRoute } from 'vue-router';
import HeroSwiper from './components/HeroView.vue'; // Assume you saved the swiper here

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper modules
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles (Crucial!)
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // Only if you want a fade effect

import { ref } from 'vue'

// Create a variable to hold the modules you want to use
const swiperModules = [Autoplay, EffectFade];
const route = useRoute();


const isMenuOpen = ref(false)

// Function to close menu when a link is clicked
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <nav class="sticky top-0 z-50 bg-[var(--color-carbon)] text-[var(--color-platinum)] shadow-md">
      <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center">
          <img 
            src="/veloce-logo-trans.png" 
            alt="Veloce Logo" 
            class="max-h-[80px] w-auto object-contain"
          />
        </div>

<nav class="relative">
  <div class="hidden md:flex gap-6 text-sm font-medium">
    <router-link to="/" class="hover:text-[var(--color-racing)] transition-colors" active-class="text-[var(--color-racing)]">Home</router-link>
    <router-link to="/about" class="hover:text-[var(--color-racing)] transition-colors" active-class="text-[var(--color-racing)]">About</router-link>
    <router-link to="/contact" class="hover:text-[var(--color-racing)] transition-colors" active-class="text-[var(--color-racing)]">Contact</router-link>
  </div>

  <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-[var(--color-platinum)] z-[60] relative">
    <span class="sr-only">Open Menu</span>
    <div class="w-6 h-5 flex flex-col justify-between">
      <span :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''" class="w-full h-0.5 bg-current transition-all duration-300"></span>
      <span :class="isMenuOpen ? 'opacity-0' : ''" class="w-full h-0.5 bg-current transition-all duration-300"></span>
      <span :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''" class="w-full h-0.5 bg-current transition-all duration-300"></span>
    </div>
  </button>

  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-[var(--color-carbon)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
      <router-link @click="closeMenu" to="/" class="text-2xl font-bold text-[var(--color-platinum)] hover:text-[var(--color-racing)]">Home</router-link>
      <router-link @click="closeMenu" to="/about" class="text-2xl font-bold text-[var(--color-platinum)] hover:text-[var(--color-racing)]">About</router-link>
      <router-link @click="closeMenu" to="/contact" class="text-2xl font-bold text-[var(--color-platinum)] hover:text-[var(--color-racing)]">Contact</router-link>
    </div>
  </transition>
</nav>
      </div>
    </nav>

<section 
  v-if="$route.path === '/'" 
  id="hero" 
  class="relative isolate overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 min-h-[60vh] bg-[var(--color-carbon)] text-[var(--color-platinum)]"
>
  <div 
    class="absolute inset-0 -z-10 bg-[url('/mag-wheel.png')] bg-cover bg-center opacity-5 mb-5"
    aria-hidden="true"
  ></div>

  <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
    Precision Engineering. <span class="text-[var(--color-goldenrod)]">Unleashed</span>
  </h1>
  
  <p class="max-w-2xl text-lg md:text-xl mb-8 font-script text-[var(--color-platinum)]">
    Experience a modular approach to automotive design with a responsive interface built for the modern enthusiast.
  </p>

  <button class="bg-[var(--color-racing)] text-white px-8 py-3 rounded-md font-bold hover:brightness-110 transition">
    Explore Performance
  </button>
</section>
    
    <!--HeroSwiper v-if="route.path === '/'" /-->
    
    <section v-if="$route.path === '/'" id="hero-live" class="flex flex-col items-center justify-center text-center px-6 mb-5 bg-[var(--color-carbon)] text-[var(--color-platinum)]">

    </section>
    
    <main class="flex-1 w-full">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="text-center py-8 text-sm text-[var(--color-steel)]">
      © {{ new Date().getFullYear() }} <a hreh="https://succeedhost.com" target="_blank" title="">SucceedHost.com</a>
    </footer>
  </div>
</template>