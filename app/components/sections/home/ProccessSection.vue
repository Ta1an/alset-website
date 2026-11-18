<script setup lang="ts">
const content = useContent();
const localePath = useLocalePath();

const how = computed(() => content.value.how);
</script>

<template>
  <section id="process" class="bg-surface flex flex-col gap-12 shadow-s">
    <!-- Section heading -->
    <div class="mx-auto max-w-2xl text-center">
      <SharedEyebrow :text="how.eyebrow" />

      <h2 class="mb-6">
        {{ how.title }}
      </h2>

      <p class="mb-6">
        {{ how.subtitle }}
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Connecting line -->
      <div
        class="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-linear-to-r from-cyan-200 via-teal-400 to-cyan-800 lg:block"
      />

      <div
        class="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
      >
        <article
          v-for="step in how.steps"
          :key="step.n"
          class="relative flex items-start gap-5 lg:flex-col lg:items-stretch"
        >
          <!-- Step number -->
          <div
            class="relative shadow-s z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-white text-base font-semibold text-primary lg:mx-auto"
          >
            {{ step.n }}
          </div>

          <!-- Card -->
          <div class="card h-full">
            <!-- Step number label -->
            <span class="text-sm font-semibold tracking-widest text-text-muted">
              {{
                how.steps === localePath("EN-en")
                  ? `STEP ${step.n}`
                  : `ЭТАП ${step.n}`
              }}
            </span>

            <!-- Content -->
            <h4 class="mt-4 text-base font-semibold leading-snug">
              {{ step.t }}
            </h4>

            <p class="mt-4 text-sm leading-relaxed text-[#71839A]">
              {{ step.d }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
