<template>
  <div class="min-h-screen bg-[var(--color-platinum)] py-20 px-6">
    <div class="max-w-7xl mx-auto">
      
      <div class="mb-16">
        <span class="text-[var(--color-racing)] font-bold tracking-[0.2em] uppercase text-sm">Transmission</span>
        <h1 class="text-5xl md:text-6xl font-extrabold text-[var(--color-carbon)] mt-2">
          Get in <span class="text-[var(--color-goldenrod)]">Touch.</span>
        </h1>
        <p class="text-lg text-[var(--color-steel)] m-auto max-w-xl mt-4 font-light">
          Whether you're looking for custom engineering or technical support, our team is ready to help you hit the redline.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-4 space-y-8">
          <div class="bg-[var(--color-carbon)] p-8 rounded-3xl text-[var(--color-platinum)] shadow-2xl relative overflow-hidden">
            <div class="absolute -right-4 -top-4 opacity-10 text-8xl font-bold italic select-none">V8</div>
            
            <h3 class="text-[var(--color-mint)] font-bold uppercase tracking-wider mb-6 text-sm">Direct Support</h3>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <span class="text-[var(--color-goldenrod)]">📍</span>
                </div>
                <div>
                  <h4 class="font-bold">Headquarters</h4>
                  <p class="text-sm opacity-70">123 Performance Way<br/>Las Vegas, NV 89101</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <span class="text-[var(--color-mint)]">✉️</span>
                </div>
                <div>
                  <h4 class="font-bold">Email</h4>
                  <p class="text-sm opacity-70">support@succeedhost.com</p>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-white/10">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-xs uppercase tracking-widest opacity-60 font-bold">Systems Online: Active</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-black/5 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-2 bg-[var(--color-mint)]"></div>
            
            <form @submit.prevent class="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-widest text-[var(--color-steel)]">Name</label>
                <input
                  type="text"
                  placeholder="e.g. Enzo Ferrari"
                  class="w-full p-4 rounded-xl border-2 border-[var(--color-platinum)] bg-[var(--color-platinum)]/30 focus:border-[var(--color-mint)] focus:bg-white outline-none transition-all"
                />
              </div>

              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-widest text-[var(--color-steel)]">Secure Email</label>
                <input
                  type="email"
                  placeholder="your email address"
                  class="w-full p-4 rounded-xl border-2 border-[var(--color-platinum)] bg-[var(--color-platinum)]/30 focus:border-[var(--color-mint)] focus:bg-white outline-none transition-all"
                />
              </div>

              <div class="space-y-2 md:col-span-2">
                <label class="text-xs font-bold uppercase tracking-widest text-[var(--color-steel)]">Message Brief</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project or spec requirements..."
                  class="w-full p-4 rounded-xl border-2 border-[var(--color-platinum)] bg-[var(--color-platinum)]/30 focus:border-[var(--color-mint)] focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div class="md:col-span-2 pt-4">
                <button
                  type="submit"
                  class="group w-full md:w-auto px-12 py-4 rounded-xl font-bold text-white bg-[var(--color-racing)] shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3"
                >
                  Engage
                  <span class="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>