<script setup lang="ts">
const content = useContent()
const contacts = computed(() => content.value.contacts)

useHead(() => ({ title: `Alset Certification — ${content.value.nav.contacts}` }))

const form = reactive({
  name: '',
  phone: '',
  email: '',
  category: '',
  message: ''
})
const submitted = ref(false)

function onSubmit() {
  // TODO: wire this up to your backend / email service / CRM.
  console.log('contact form submission', { ...form })
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="pt-16 pb-14">
      <div class="container-page">
        <div class="text-primary font-semibold text-sm mb-3.5">{{ contacts.eyebrow }}</div>
        <h1 class="text-[30px] md:text-[38px] leading-tight font-bold text-navy mb-4 max-w-lg">{{ contacts.title }}</h1>
        <p class="text-[16.5px] leading-relaxed text-[#4C5A70] mb-11 max-w-lg">{{ contacts.intro }}</p>

        <div class="flex gap-7 flex-wrap items-start">
          <div class="flex-1 min-w-[320px] flex flex-col gap-4">
            <div class="card p-6 flex items-center gap-4">
              <div class="w-[42px] h-[42px] rounded-[10px] bg-[#EEF3FA] flex items-center justify-center shrink-0">
                <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Phone">
                  <path fill="#15468C" d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.6c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.2 1.1z" />
                </svg>
              </div>
              <div>
                <div class="text-[13px] text-[#8092AB]">{{ contacts.phoneLabel }}</div>
                <a href="tel:+77002693035" class="text-base font-semibold text-[#17263F]">+7 700 269 3035</a>
              </div>
            </div>

            <div class="card p-6 flex items-center gap-4">
              <div class="w-[42px] h-[42px] rounded-[10px] bg-[#EEF3FA] flex items-center justify-center shrink-0">
                <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="WhatsApp">
                  <path fill="#15468C" d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.8 3.6 13.4 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.4-8.4 8.4z" />
                </svg>
              </div>
              <div>
                <div class="text-[13px] text-[#8092AB]">{{ contacts.whatsappLabel }}</div>
                <a href="https://wa.me/77002693035" target="_blank" rel="noopener" class="text-base font-semibold text-[#17263F]">+7 700 269 3035</a>
              </div>
            </div>

            <div class="card p-6 flex items-center gap-4">
              <div class="w-[42px] h-[42px] rounded-[10px] bg-[#EEF3FA] flex items-center justify-center shrink-0">
                <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Instagram">
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="#15468C" stroke-width="2" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="#15468C" stroke-width="2" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="#15468C" />
                </svg>
              </div>
              <div>
                <div class="text-[13px] text-[#8092AB]">Instagram</div>
                <span class="text-[15px] font-semibold text-[#9AA7BC]">{{ contacts.instaPlaceholder }}</span>
              </div>
            </div>
          </div>

          <form class="card p-8 flex-[2] min-w-[360px] flex flex-col gap-4.5" @submit.prevent="onSubmit">
            <h2 class="text-[19px] m-0 text-[#17263F]">{{ contacts.formTitle }}</h2>

            <div>
              <label for="f-name" class="text-[13.5px] font-semibold text-[#3E4C63] block mb-1.5">{{ contacts.form.name }}</label>
              <input id="f-name" v-model="form.name" type="text" :placeholder="contacts.form.namePh"
                class="w-full border border-[#D7E0EC] rounded-lg px-3.5 py-3 text-[14.5px]">
            </div>

            <div class="flex gap-3.5 flex-wrap">
              <div class="flex-1 min-w-[180px]">
                <label for="f-phone" class="text-[13.5px] font-semibold text-[#3E4C63] block mb-1.5">{{ contacts.form.phone }}</label>
                <input id="f-phone" v-model="form.phone" type="tel" placeholder="+7 7__ ___ __ __"
                  class="w-full border border-[#D7E0EC] rounded-lg px-3.5 py-3 text-[14.5px]">
              </div>
              <div class="flex-1 min-w-[180px]">
                <label for="f-email" class="text-[13.5px] font-semibold text-[#3E4C63] block mb-1.5">Email</label>
                <input id="f-email" v-model="form.email" type="email" placeholder="name@company.com"
                  class="w-full border border-[#D7E0EC] rounded-lg px-3.5 py-3 text-[14.5px]">
              </div>
            </div>

            <div>
              <label for="f-category" class="text-[13.5px] font-semibold text-[#3E4C63] block mb-1.5">{{ contacts.form.category }}</label>
              <select id="f-category" v-model="form.category" class="w-full border border-[#D7E0EC] rounded-lg px-3.5 py-3 text-[14.5px] bg-white">
                <option v-for="c in contacts.formCategories" :key="c" :value="c">{{ c }}</option>
              </select>
            </div>

            <div>
              <label for="f-msg" class="text-[13.5px] font-semibold text-[#3E4C63] block mb-1.5">{{ contacts.form.message }}</label>
              <textarea id="f-msg" v-model="form.message" rows="4" :placeholder="contacts.form.messagePh"
                class="w-full border border-[#D7E0EC] rounded-lg px-3.5 py-3 text-[14.5px]" />
            </div>

            <button type="submit" class="btn-primary justify-center py-3.5">{{ contacts.form.submit }}</button>

            <p v-if="submitted" class="m-0 text-[13.5px] text-[#1C8A5C]">{{ contacts.form.sent }}</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
