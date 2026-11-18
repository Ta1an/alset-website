<script lang="ts" setup>
defineProps<{
  text: string
}>()
</script>


<template>
    <div
        class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white mb-6"
        style="background: linear-gradient(120deg, #15468c, #1c8fa0)"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-white" />
        {{ text }}
      </div>
</template>