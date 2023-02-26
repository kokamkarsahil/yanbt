<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/posts', sort: { _id: -1, $numeric: true }, "without":["body"] }
</script>

<template>
<main class="max-w-none">
<ContentList :query="query" v-slot="{ list }">
<div v-for="post in list" :key="post._id">
<hr class="py-2 mt-8 border-t-2 w-20 mx-auto" />
<article
  class="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
>
  <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="{{ post.publishDate }}"
      class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
    >
      <span>{{ post.publishDate.slice(7, 11) }}</span>
      <span class="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
      <span>{{ post.publishDate.slice(0, 6) }}</span>
    </time>
  </div>

  <div class="hidden sm:block sm:basis-56">
    <nuxt-img
      provider="twicpics"
      :alt="post.alt"
      :src="post.heroImage"
      :width="post.image.width"
      :height="post.image.height"
      class="aspect-auto h-full w-full object-cover"
    />
  </div>

  <div class="flex flex-1 flex-col justify-between">
    <div
      class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
    >
      <NuxtLink :to="post._path">
        <h3 class="font-bold uppercase text-gray-900 dark:text-white">
          {{ post.title }}
        </h3>
      </NuxtLink>

      <p
        class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
      >
      {{ post.description }}
      </p>
    </div>

    <div class="sm:flex sm:items-end sm:justify-end">
      <NuxtLink
        :to="post._path"
        class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
      >
        Read Blog
        </NuxtLink>
    </div>
  </div>
</article>
</div>
</ContentList>
</main>
</template>