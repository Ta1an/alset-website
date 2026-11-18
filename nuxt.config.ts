// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxtjs/sitemap", "@nuxtjs/i18n"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },

  css: ["@/assets/css/main.css"],

  icon: {
    mode: "css",
    cssLayer: "base",
    provider: "iconify",
    clientBundle: {
      scan: true,
    },
  },

  fonts: {
    defaults: {
      subsets: ["cyrillic-ext", "cyrillic"],
    },

    families: [
      {
        name: "Onest",
        provider: "google",
        weights: ["400 700"],
        styles: ["normal"],
      },
      {
        name: "Inter",
        provider: "google",
        weights: ["400 700"],
        styles: ["normal"],
      },
    ],
  },

  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "ru", language: "ru-RU" },
    ],
    defaultLocale: "en",
  },
});
