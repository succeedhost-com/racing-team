<template>
  <div class="min-h-screen bg-[var(--color-platinum)] text-[var(--color-carbon)]">
    
    <section class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
      <div class="p-8 rounded-2xl shadow-lg bg-white group hover:-translate-y-2 transition-transform duration-300">
        <div class="w-full h-48 rounded-xl mb-6 overflow-hidden bg-[var(--color-racing)]">
          <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/bmw-motor.png" alt="Engine">
        </div>
        <h3 class="text-xl font-bold mb-2 uppercase tracking-tight">Performance</h3>
        <p class="text-[var(--color-steel)] leading-relaxed">
          Optimized structure with clean layout and scalable architecture.
        </p>
      </div>

      <div class="p-8 rounded-2xl shadow-lg bg-white group hover:-translate-y-2 transition-transform duration-300">
        <div class="w-full h-48 rounded-xl mb-6 overflow-hidden bg-[var(--color-goldenrod)]">
          <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/classic-v8.png" alt="Engine">
        </div>
        <h3 class="text-xl font-bold mb-2 uppercase tracking-tight">Design System</h3>
        <p class="text-[var(--color-steel)] leading-relaxed">
          Consistent theme tokens powered by CSS variables and Tailwind.
        </p>
      </div>

      <div class="p-8 rounded-2xl shadow-lg bg-white group hover:-translate-y-2 transition-transform duration-300">
        <div class="w-full h-48 rounded-xl mb-6 overflow-hidden bg-[var(--color-mint)]">
          <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/air-intake.png" alt="Engine">
        </div>
        <h3 class="text-xl font-bold mb-2 uppercase tracking-tight">Responsive</h3>
        <p class="text-[var(--color-steel)] leading-relaxed">
          Mobile-first layout built with utility-first CSS principles.
        </p>
      </div>
    </section>

    <section class="py-24 bg-[var(--color-carbon)] text-white overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <span class="text-[var(--color-mint)] font-bold tracking-[0.3em] uppercase text-xs">Core Technology</span>
          <h2 class="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Built for the <br/>
            <span class="text-[var(--color-racing)] italic font-black">Modern Redline.</span>
          </h2>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-goldenrod)] font-bold">01</div>
              <div>
                <h4 class="font-bold text-lg">Reactive Core</h4>
                <p class="text-white/60 text-sm">Powered by Vue 3's Proxy-based reactivity for state management that never skips a beat.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-racing)] font-bold">02</div>
              <div>
                <h4 class="font-bold text-lg">Utility-First Chassis</h4>
                <p class="text-white/60 text-sm">Tailwind CSS eliminates dead-code weight, ensuring the smallest possible CSS payload for rapid delivery.</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="shrink-0 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-mint)] font-bold">03</div>
              <div>
                <h4 class="font-bold text-lg">Modular Componentry</h4>
                <p class="text-white/60 text-sm">Every element is a reusable, swappable part—engineered for quick iterations and maintenance.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-4 bg-[var(--color-racing)]/20 blur-3xl rounded-full"></div>
          <div class="relative bg-white/5 border border-white/10 p-2 rounded-3xl backdrop-blur-sm">
             <div class="bg-[var(--color-carbon)] rounded-2xl p-6 font-mono text-xs text-mint shadow-inner">
                <p class="opacity-40">// System Initializing...</p>
                <p class="text-white mt-2"><span class="text-racing">import</span> { Engine } <span class="text-racing">from</span> <span class="text-goldenrod">'@veloce/core'</span>;</p>
                <p class="text-white mt-1">Engine.<span class="text-mint">ignite</span>({ turbo: <span class="text-goldenrod">true</span> });</p>
                <p class="text-platinum/50 mt-4 italic">// Output: 60fps steady.</p>
             </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center py-24 px-6 bg-[var(--color-mint)] relative overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span class="text-[20vw] font-black italic">VELOCE</span>
      </div>
      
      <div class="relative z-10">
        <h2 class="text-4xl md:text-5xl font-black mb-4 text-[var(--color-carbon)]">
          READY TO LAUNCH?
        </h2>
        <p class="mb-10 text-[var(--color-carbon)]/80 max-w-md mx-auto font-medium">
          Whether you're building a dashboard or a dealership, our framework provides the traction you need.
        </p>
        <button
          class="px-12 py-4 rounded-full font-bold text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
          style="background-color: var(--color-carbon);"
        >
          View Documentation
        </button>
      </div>
    </section>
  </div>
</template>