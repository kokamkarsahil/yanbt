<template>
  <div>
    <button
      class="ml-6 mt-6 fixed inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      onclick="history.back()"
    >
      <span class="sr-only">Back Button</span>

      <svg
        class="h-5 w-5"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>
