<script setup lang="ts">
const content = useContent()
const localePath = useLocalePath()
const how = computed(() => content.value.how)

useHead(() => ({ title: `Alset Certification — ${content.value.nav.how}` }))
</script>

<template>
  <div>
    <section class="pt-16 pb-9">
      <div class="container-page max-w-xl">
        <div class="text-primary font-semibold text-sm mb-3.5">{{ how.eyebrow }}</div>
        <h1 class="text-[30px] md:text-[38px] leading-tight font-bold text-navy mb-4">{{ how.title }}</h1>
        <p class="text-[16.5px] leading-relaxed text-[#4C5A70] m-0">{{ how.intro }}</p>
      </div>
    </section>

    <section class="pb-14">
      <div class="container-page flex flex-col">
        <div v-for="st in how.steps" :key="st.n" class="flex gap-6 py-6 border-t border-border">
          <div class="shrink-0 w-[52px] h-[52px] rounded-full bg-navy text-white flex items-center justify-center text-[19px] font-bold font-display">
            {{ st.n }}
          </div>
          <div class="flex-1">
            <h3 class="text-lg mb-2 text-[#17263F]">{{ st.t }}</h3>
            <p class="text-[15px] leading-relaxed text-[#5B6B82] m-0 max-w-2xl">{{ st.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner :title="how.ctaTitle" :sub="how.ctaSub" :btn="how.ctaBtn" :to="localePath('/contacts')" />
  </div>
</template>
