<template>
  <div class="min-h-screen">
    
    <section id="about" class="text-[var(--color-platinum)] py-16 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div class="relative overflow-hidden rounded-xl shadow-2xl group">
          <img 
            src="/double-barrel-carb.png" 
            alt="High Performance Engine" 
            class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon)]/90 via-transparent to-transparent"></div>
        </div>

        <div>
          <span class="text-[var(--color-racing)] font-bold tracking-widest uppercase text-sm mb-2 block">
            Technical Profile
          </span>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-carbon)] leading-tight">
            Precision-Tuned Web <span class="text-[var(--color-goldenrod)]">Performance</span>
          </h1>

          <p class="text-lg mb-8 font-light max-w-xl leading-relaxed text-[var(--color-carbon)]/90">
            I don't just build websites; I engineer high-performance digital machines. In the browser, every millisecond counts. I specialize in crafting ultra-responsive user interfaces that combine the raw power of <strong class="text-[var(--color-racing)]">Vue 3</strong> with the aerodynamic efficiency of <strong class="text-[var(--color-mint)]">Tailwind CSS</strong>.
          </p>

          <div class="mb-10 bg-[var(--color-carbon)] p-6 rounded-lg border border-white/10 backdrop-blur-sm">
            <h2 class="text-xl font-bold mb-6 uppercase tracking-wider text-[var(--color-platinum)]">The Engineering Bay</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <li class="flex flex-col border-l-2 border-[var(--color-goldenrod)] pl-4">
                <span class="font-bold text-white">The Engine</span>
                <span class="text-platinum/60">Vue 3 + Vite Architecture</span>
              </li>
              <li class="flex flex-col border-l-2 border-[var(--color-racing)] pl-4">
                <span class="font-bold text-white">The Chassis</span>
                <span class="text-platinum/60">Tailwind Design Systems</span>
              </li>
              <li class="flex flex-col border-l-2 border-[var(--color-mint)] pl-4">
                <span class="font-bold text-white">The Transmission</span>
                <span class="text-platinum/60">Pinia State Management</span>
              </li>
              <li class="flex flex-col border-l-2 border-white/30 pl-4">
                <span class="font-bold text-white">Quality Control</span>
                <span class="text-platinum/60">Git & CI/CD Workflow</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-4">
            <button class="group relative px-8 py-3 overflow-hidden rounded-md bg-[var(--color-racing)] font-bold text-white transition-all hover:scale-105 active:scale-95">
              <span class="relative z-10">Download Resume</span>
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-300"></div>
            </button>
            
            <button class="px-8 py-3 rounded-md font-bold border border-[var(--color-mint)] text-[var(--color-carbon)] hover:bg-[var(--color-mint)] hover:text-[var(--color-carbon)] transition-all">
              View Projects
            </button>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>