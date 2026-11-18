<script setup lang="ts">
const content = useContent();
const localePath = useLocalePath();

const home = computed(() => content.value.home)
const services = computed(() => content.value.services);
</script>

<template>
  <section class="flex flex-col gap-12 text-center">
    <!-- Section heading -->
    <div class="mx-auto max-w-3xl">
      <SharedEyebrow :text="services.eyebrow" />
      <h2 class="mb-6">
        {{ services.title }}
      </h2>

      <p
        class="mx-auto"
      >
        {{ services.subtitle }}
      </p>
    </div>

    <!-- Services grid -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="sv in home.services"
        :key="sv.title"
        class="card cursor-pointer group relative flex flex-col gap-4 border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-m"
        :class="
          sv === home.services[0]
            ? 'sm:col-span-2 lg:col-span-2 bg-primary/15'
            : 'bg-bg hover:bg-bg-light'
        "
      >
        <!-- Card header -->
        <div class="relative z-10 flex items-start justify-between">
          <!-- Icon -->
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-light shadow-s text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
          >
            <Icon
              :name="sv.icon"
              class="h-6 w-6 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <!-- Number -->
          <span
            class="text-xs font-semibold tracking-wider text-text-muted transition-colors duration-300 group-hover:text-primary"
          >
            {{ String(home.services.indexOf(sv) + 1).padStart(2, "0") }}
          </span>
        </div>

        <!-- Card content -->
        <div class="relative z-10">
          <h4
            class="mb-2 transition-colors duration-300 group-hover:text-primary"
            :class="
              sv === home.services[0]
                ? 'max-w-md text-xl sm:text-2xl'
                : 'text-[17px]'
            "
          >
            {{ sv.title }}
          </h4>

          <p class="text-sm leading-relaxed">
            {{ sv.d }}
          </p>
        </div>

        <!-- Bottom accent -->
        <div
          class="relative z-10 mt-auto h-px w-0 bg-primary/50 transition-all duration-500 group-hover:w-full"
        />
      </div>
    </div>

    <!-- All services button -->
    <div class="text-center">
      <NuxtLink :to="localePath('/services')" class="button btn-outline group">
        {{ home.servicesButton }}

        <Icon
          name="tabler:arrow-right"
          class="text-base transition-transform duration-300 group-hover:translate-x-1"
        />
      </NuxtLink>
    </div>
  </section>
</template>
