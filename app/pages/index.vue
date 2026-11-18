<script setup lang="ts">
import HeroSection from "~/components/sections/home/HeroSection.vue";
import ProccessSection from "~/components/sections/home/ProccessSection.vue";
import ServicesSection from "~/components/sections/home/ServicesSection.vue";
import CTASection from "~/components/shared/CTASection.vue";
const content = useContent();
const home = computed(() => content.value.home);

useHead(() => ({ title: `Alset Certification — ${content.value.nav.home}` }));

// Cycle the three brand accents across the services grid and the
// process teaser so the page doesn't read as one flat blue block.
</script>

<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <ProccessSection />
    <CTASection
      :title="home.ctaTitle"
      :description="home.ctaSub"
      :button-text="home.ctaBtn"
    />
  </div>
</template>
