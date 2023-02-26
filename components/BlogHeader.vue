<template>
  <a
    class="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-red-600 before:transition hover:before:scale-100"
    href="/"
  >
    <h1 class="text-3xl font-bold sm:text-5xl dark:text-white">{{ useRuntimeConfig().siteName }}</h1>
  </a>
</template>
