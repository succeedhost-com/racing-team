<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
    <span class="text-[var(--color-racing)] font-black text-9xl opacity-20 absolute select-none">404</span>
    
    <div class="relative z-10">
      <h1 class="text-4xl md:text-6xl font-extrabold text-[var(--color-carbon)] mb-4">
        Off <span class="text-[var(--color-racing)]">Track.</span>
      </h1>
      <p class="text-lg text-[var(--color-steel)] mb-8 max-w-md mx-auto">
        It looks like you've taken a wrong turn. This page doesn't exist in our current spec.
      </p>
      
      <router-link 
        to="/" 
        class="inline-block bg-[var(--color-carbon)] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
      >
        Back to Pit Lane
      </router-link>
    </div>
  </div>
</template>