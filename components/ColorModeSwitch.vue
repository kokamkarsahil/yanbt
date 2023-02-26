<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <div>
    <div class="flex justify-between">
      <BlogHeader />
      <button aria-label="Color Mode" class="inline-block w-5" @click="onClick">
        <ColorScheme placeholder="...">
          <img v-if="colorMode.value === 'dark'" src="/dark.svg" alt="darkMode" class="w-5 h-5">
          <img v-else src="/light.svg" alt="lightMode" class="w-5 h-5">
        </ColorScheme>
      </button>
    </div>
    <h2 class="mt-4 dark:text-white">
      {{ useRuntimeConfig().siteDescription }}
    </h2>
  </div>
</template>
