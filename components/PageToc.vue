<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <div>
    <h2>Table of content</h2>
    <ul>
      <li v-for="link in toc.links" :key="link.id">
        <a
          :href="`#${link.id}`"
        >
          {{ link.text }}
        </a>
        <!-- Nested List - Start -->
        <ul v-if="link.children">
          <li v-for="child in link.children">
            <a
              :href="`#${child.id}`"
            >
              {{ child.text }}
            </a>
          </li>
        </ul>
        <!-- Nested List - End -->
      </li>
    </ul>
  </div>
</template>
