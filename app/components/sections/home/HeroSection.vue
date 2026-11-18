<script setup lang="ts">
const content = useContent();
const localePath = useLocalePath();
const router = useRouter();
const home = computed(() => content.value.home);

useHead(() => ({ title: `Alset Certification — ${content.value.nav.home}` }));

const product = ref("");
function submitCta() {
  router.push({
    path: localePath("/contacts"),
    query: product.value ? { product: product.value } : {},
  });
}
</script>

<template>
  <section class="top-section flex flex-col gap-12">
    <!-- faint dot-grid texture -->
    <div class="text-center max-w-6xl mx-auto">
      <SharedEyebrow :text="home.eyebrow" class="mx-auto" />

      <h1 class="mb-6">
        {{ home.titleBefore }}
        <span class="text-primary">{{ home.titleHighlight }}</span>
        {{ home.titleAfter }}
      </h1>

      <p class="mb-6 max-w-xl mx-auto">
        {{ home.subtitle }}
      </p>

      <div class="flex gap-4 flex-wrap justify-center">
        <NuxtLink :to="localePath('/contacts')" class="button btn-primary">
          {{ home.primary }}
        </NuxtLink>
        <NuxtLink :to="localePath('/services')" class="button btn-outline">
          {{ home.secondary }}
        </NuxtLink>
      </div>
    </div>

    <!-- three pillars, Oh Dear-style: icon, short bold label, one-line description -->
    <div
      class="grid gap-10 max-w-4xl mx-auto"
      style="
        grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
      "
    >
      <div v-for="p in home.pillars" :key="p.title" class="text-center">
        <div
          class="bg-bg-light shadow-s w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
        >
          <Icon :name="p.icon" class="text-primary block w-6 h-6" />
        </div>
        <h4 class="font-heading font-semibold text-navy mb-2">
          {{ p.title }}
        </h4>
        <p class="text-sm leading-relaxed max-w-56 mx-auto">
          {{ p.desc }}
        </p>
      </div>
    </div>

    <!-- quick-start bar -->
    <div>
      <form
        class="card flex-row max-w-5xl mx-auto p-2 flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap shadow-m"
        @submit.prevent="submitCta"
      >
        <label for="hero-product" class="sr-only">{{
          home.ctaBar.label
        }}</label>
        <input
          id="hero-product"
          v-model="product"
          type="text"
          :placeholder="home.ctaBar.placeholder"
          class="flex-1 min-w-50 bg-transparent px-4 py-3 text-sm outline-none"
        />
        <button type="submit" class="button btn-primary">
          {{ home.ctaBar.button }}
          <Icon name="tabler:arrow-right" class="text-base" />
        </button>
      </form>
    </div>

    <!-- wave divider into the next section -->
  </section>

  <section class="bg-surface py-12 shadow-s">
    <div
      class="flex items-center justify-evenly flex-wrap"
    >
      <div v-for="s in home.stats" :key="s.l" class="text-center">
        <h3>
          {{ s.n }}
        </h3>
        <div class="text-sm text-text-muted mt-1">{{ s.l }}</div>
      </div>
    </div>
  </section>
</template>
