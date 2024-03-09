import RSS from 'rss'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const config = useSiteConfig(event)
  const feed = new RSS({
    title: config.name,
    site_url: config.url,
    feed_url: `${config.url}/rss.xml`
  })

  const docs = await serverQueryContent(event)
    .sort({ _id: -1, $numeric: true })
    .find()

  const blogPosts = docs.filter(doc => doc?._path?.includes('/posts'))
  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? '-',
      url: `${config.url}${doc._path}`,
      date: doc.publishDate,
      description: doc.description
    })
  }

  const feedString = feed.xml({ indent: true })

  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(feedString)
})
