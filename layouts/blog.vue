<template>
  <div>
    <SkipContent />
    <div class="bg-white dark:bg-slate-900">
      <div
        class="max-w-2xl px-4 py-10 m-auto bg-slate-50 dark:bg-gray-800 sm:px-8 sm:shadow ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg"
      >
        <main id="main" class="max-w-none">
          <ColorModeSwitch
            class="dark:text-grey-100 hover:text-grey-700 dark:hover:text-grey-300"
          />
          <PostCard />
          <BlogFooter />
        </main>
      </div>
    </div>
  </div>
</template>
