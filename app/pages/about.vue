<script setup lang="ts">
const content = useContent()
const localePath = useLocalePath()
const about = computed(() => content.value.about)

useHead(() => ({ title: `Alset Certification — ${content.value.nav.about}` }))
</script>

<template>
  <div>
    <section class="pt-16 pb-10">
      <div class="container-page max-w-2xl">
        <div class="text-primary font-semibold text-sm mb-3.5">{{ about.eyebrow }}</div>
        <h1 class="text-[32px] md:text-[40px] leading-tight font-bold text-navy mb-5">{{ about.title }}</h1>
        <p class="text-lg leading-relaxed text-[#4C5A70] m-0">{{ about.intro }}</p>
      </div>
    </section>

    <section class="pb-14">
      <div class="container-page flex gap-10 flex-wrap items-stretch">
        <div class="card p-9 flex-1 min-w-[340px]">
          <svg width="30" height="22" viewBox="0 0 34 26" aria-hidden="true" class="text-border mb-3.5">
            <path fill="currentColor" d="M14.6 0 6.9 13.4H12v12.2H0V12.9L8.1 0zm18 0-7.7 13.4h5.1v12.2h-12V12.9L26.1 0z"/>
          </svg>
          <p class="text-lg leading-relaxed text-[#1C2B45] mb-5 font-medium">{{ about.quote.text }}</p>
          <div class="flex items-center gap-3">
            <div class="w-[46px] h-[46px] rounded-full shrink-0" style="background: linear-gradient(135deg, #1B4B8F, #2BB8C4)" />
            <div>
              <div class="font-semibold text-[#17263F] text-[15px]">{{ about.quote.name }}</div>
              <div class="text-[#6B7A90] text-sm">{{ about.quote.role }}</div>
            </div>
          </div>
        </div>
        <div class="flex-1 min-w-[260px] grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(min(160px, 100%), 1fr))">
          <div v-for="s in about.stats" :key="s.l" class="card p-6 text-center">
            <div class="text-[32px] font-bold text-primary font-display">{{ s.n }}</div>
            <div class="text-[#5B6B82] text-[13.5px] mt-1.5">{{ s.l }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 bg-white border-y border-border">
      <div class="container-page">
        <h2 class="text-[28px] text-navy font-bold mb-8">{{ about.valuesTitle }}</h2>
        <div class="grid gap-5" style="grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr))">
          <div v-for="v in about.values" :key="v.t" class="card p-7">
            <h3 class="text-[17px] mb-2.5 text-[#17263F]">{{ v.t }}</h3>
            <p class="text-[14.5px] leading-relaxed text-[#5B6B82] m-0">{{ v.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner :title="about.ctaTitle" :sub="about.ctaSub" :btn="about.ctaBtn" :to="localePath('/contacts')" />
  </div>
</template>
