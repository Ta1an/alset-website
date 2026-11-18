<script setup lang="ts">
const content = useContent()
const localePath = useLocalePath()
const services = computed(() => content.value.services)

useHead(() => ({ title: `Alset Certification — ${content.value.nav.services}` }))
</script>

<template>
  <div>
    <section class="pt-16 pb-8">
      <div class="container-page max-w-xl">
        <div class="text-primary font-semibold text-sm mb-3.5">{{ services.eyebrow }}</div>
        <h1 class="text-[30px] md:text-[38px] leading-tight font-bold text-navy mb-4">{{ services.title }}</h1>
        <p class="text-[16.5px] leading-relaxed text-[#4C5A70] m-0">{{ services.intro }}</p>
      </div>
    </section>

    <section class="pb-12">
      <div class="container-page grid gap-5" style="grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr))">
        <div v-for="sv in services.services" :key="sv.t" class="card p-7">
          <div class="w-10 h-10 rounded-[10px] bg-[#EEF3FA] flex items-center justify-center mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="none" stroke="#15468C" stroke-width="2" d="M9 12.5 11.3 15 16 9" />
              <circle cx="12" cy="12" r="9.5" fill="none" stroke="#15468C" stroke-width="2" />
            </svg>
          </div>
          <h3 class="text-[17.5px] mb-2 text-[#17263F]">{{ sv.t }}</h3>
          <p class="text-[14.5px] leading-relaxed text-[#5B6B82] m-0">{{ sv.d }}</p>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white border-y border-border">
      <div class="container-page">
        <h2 class="text-[27px] text-navy font-bold mb-2.5">{{ services.typesTitle }}</h2>
        <p class="text-[15px] text-[#5B6B82] mb-7 max-w-xl">{{ services.typesSub }}</p>
        <div class="grid gap-5" style="grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr))">
          <div v-for="ty in services.types" :key="ty.t" class="card p-6.5 border-t-[3px] border-t-primary">
            <h3 class="text-[16.5px] mb-2 text-[#17263F]">{{ ty.t }}</h3>
            <p class="text-sm leading-relaxed text-[#5B6B82] m-0">{{ ty.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14">
      <div class="container-page">
        <h2 class="text-[27px] text-navy font-bold mb-2.5">{{ services.goodsTitle }}</h2>
        <p class="text-[15px] text-[#5B6B82] mb-6 max-w-xl">{{ services.goodsSub }}</p>
        <div class="flex flex-wrap gap-3">
          <span v-for="g in services.goods" :key="g" class="chip">{{ g }}</span>
        </div>
      </div>
    </section>

    <CtaBanner :title="services.ctaTitle" :sub="services.ctaSub" :btn="services.ctaBtn" :to="localePath('/contacts')" />
  </div>
</template>
