<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const content = useContent();

const links = computed(() => [
  { to: localePath("/"), label: content.value.nav.home },
  { to: localePath("/about"), label: content.value.nav.about },
  { to: localePath("/services"), label: content.value.nav.services },
  { to: localePath("/how-it-works"), label: content.value.nav.how },
  { to: localePath("/contacts"), label: content.value.nav.contacts },
]);
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50"
  >
    <div class="relative bg-bg shadow-s flex items-center justify-between  py-2 px-5 sm:py-3 sm:px-8 md:py-4 md:px-[8%] lg:py-5 lg:px-[10%]">
      <NuxtLink
        :to="localePath('/')"
        aria-label="Alset Certification — home"
        class="shrink-0"
      >
        <img
          src="/logos/logo.png"
          alt="Alset Certification"
          class="h-12 block"
        />
      </NuxtLink>

      <nav aria-label="Primary" class="flex gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="hover:text-primary  transition-colors"
          active-class="text-primary"
          exact-active-class="text-primary"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <div
          role="group"
          aria-label="Language"
          class="flex border border-border rounded-lg shadow-s overflow-hidden"
        >
          <NuxtLink
            :to="switchLocalePath('ru')"
            class="px-3.5 py-2 text-[13px] font-bold"
            :class="
              locale === 'ru'
                ? 'bg-primary text-white'
                : 'bg-white text-[#5B6B82]'
            "
            :aria-pressed="locale === 'ru'"
            >RU</NuxtLink
          >
          <NuxtLink
            :to="switchLocalePath('en')"
            class="px-3.5 py-2 text-[13px] font-bold"
            :class="
              locale === 'en'
                ? 'bg-primary text-white'
                : 'bg-white text-[#5B6B82]'
            "
            :aria-pressed="locale === 'en'"
            >EN</NuxtLink
          >
        </div>
        <a
          class="button btn-primary"
          href="https://wa.me/77002693035"
          target="_blank"
          rel="noopener"
        >
          {{ content.cta.whatsapp }}
        </a>
      </div>
    </div>
  </header>
</template>
