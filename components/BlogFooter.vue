<script setup lang="ts">
const siteConfig = useSiteConfig()
</script>

<template>
  <footer>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-900 dark:text-white">
          &copy; <a class="hover:underline" :href="siteConfig.url">None</a>, 2023. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
