import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://yanbt.netlify.app'
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: '2023-02-26T08:02:28+00:00'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})