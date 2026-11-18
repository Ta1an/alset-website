<script setup lang="ts">
const localePath = useLocalePath();
const content = useContent();
</script>

<template>
  <footer class="bg-navy relative shadow-s flex flex-col  py-4 px-5 sm:py-3 sm:px-8 md:py-6 md:px-[8%] lg:py-8 lg:px-[10%]">
      <!-- Main footer -->
      <div
        class="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12"
      >
        <!-- Brand -->
        <div class="lg:col-span-5">
          <NuxtLink
            :to="localePath('/')"
            class="inline-flex rounded-md"
            :aria-label="content.nav.home"
          >
            <img
              src="/logos/logo-white.png"
              alt="Alset Certification"
              class="h-[34px] w-auto object-contain"
            />
          </NuxtLink>

          <p class="mt-5 max-w-sm text-sm leading-relaxed text-[#AEC0DA]">
            {{ content.footer.description }}
          </p>
        </div>

        <!-- Navigation -->
        <div class="lg:col-span-3">
          <h3 class="mb-5 text-sm font-semibold text-white">
            {{ content.footer.navigation }}
          </h3>

          <nav aria-label="Footer" class="flex flex-col items-start gap-3">
            <NuxtLink :to="localePath('/')" class="footer-link">
              {{ content.nav.home }}
            </NuxtLink>

            <NuxtLink :to="localePath('/about')" class="footer-link">
              {{ content.nav.about }}
            </NuxtLink>

            <NuxtLink :to="localePath('/services')" class="footer-link">
              {{ content.nav.services }}
            </NuxtLink>

            <NuxtLink :to="localePath('/how-it-works')" class="footer-link">
              {{ content.nav.how }}
            </NuxtLink>

            <NuxtLink :to="localePath('/contacts')" class="footer-link">
              {{ content.nav.contacts }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact CTA -->
        <div class="lg:col-span-4">
          <h3 class="max-w-xs text-lg font-semibold leading-snug text-white">
            {{ content.footer.contactTitle }}
          </h3>

          <p class="mt-3 max-w-xs text-sm leading-relaxed text-[#AEC0DA]">
            {{ content.home.ctaSub }}
          </p>

          <NuxtLink
            :to="localePath('/contacts')"
            class="group mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-[#E8F1FA]"
          >
            {{ content.footer.contactButton }}

            <Icon
              name="tabler:arrow-up-right"
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom footer -->
      <div
        class="flex flex-col items-start justify-between gap-4 pt-7 sm:flex-row sm:items-center"
      >
        <p class="m-0 text-[13px] text-[#7E92B0]">
          {{ content.footer.rights }}
        </p>

        <span class="text-xs font-medium tracking-wide text-[#7E92B0]">
          ALSET CERTIFICATION
        </span>
      </div>
  </footer>
</template>

<style scoped>
@reference '@/assets/css/main.css'
.footer-link {
  @apply text-sm text-[#AEC0DA] transition-colors duration-200;
}

.footer-link:hover {
  @apply text-white;
}
</style>
