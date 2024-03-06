// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  telemetry: false,
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://yanbt.netlify.app',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'YANBT',
      siteDescription: process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Yet Another Nuxt Blog Theme!',
      language: 'en' // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  nitro: {
    node: true,
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/rss.xml'],
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
  extends: ['@nuxt-themes/elements'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  image: { twicpics: { baseURL: process.env.NUXT_PUBLIC_TWICPICS_URL } },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@nuxtjs/seo'
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    // https://content.nuxtjs.org/api/
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: [
        'rehype-mathjax'
      ],
      toc: {
        depth: 3,
        searchDepth: 3
      }
    },
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'dracula-soft'
      }
    }
  }
})
