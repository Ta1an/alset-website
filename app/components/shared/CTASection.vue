<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  buttonText: string;
  eyebrow?: string;
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: "",
  to: "/contacts",
});

const localePath = useLocalePath();
</script>

<template>
  <section class="pb-20 sm:pb-24">
    <div class="container-page">
      <div
        class="relative isolate flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0F2A52] via-[#15468C] to-[#1C8FA0] p-7 sm:p-10 md:flex-row md:items-center md:p-12"
      >
        <!-- Background decorations -->
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full bg-white/[0.06]"
        />

        <div
          aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-72 w-72 rounded-full bg-[#C23E86]/20 blur-3xl"
        />

        <!-- Content -->
        <div class="relative max-w-xl">
          <span
            v-if="eyebrow"
            class="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200"
          >
            {{ eyebrow }}
          </span>

          <h2
            class="mb-3 text-2xl font-bold leading-tight text-white sm:text-[27px]"
          >
            {{ title }}
          </h2>

          <p
            class="m-0 text-sm leading-relaxed text-[#CBDAF0] sm:text-[15.5px]"
          >
            {{ description }}
          </p>
        </div>

        <!-- CTA Button -->
        <NuxtLink
          :to="localePath(to)"
          class="group relative inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-7 py-3.5 text-center text-sm font-bold text-[#142F55] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0F6FC] hover:shadow-xl sm:w-auto sm:text-[15px]"
        >
          {{ buttonText }}

          <Icon
            name="tabler:arrow-right"
            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
