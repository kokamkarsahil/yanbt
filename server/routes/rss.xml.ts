import { serverQueryContent } from '#content/server';
import RSS from 'rss';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const feed = new RSS({
    title: config.public.siteName,
    site_url: config.public.siteUrl,
    feed_url: `${config.public.siteUrl}/rss.xml`,
  });
  console.log(`${config.public.siteUrl}/rss.xml`)

  const docs = await serverQueryContent(event)
    .sort({ id: -1, $numeric: true })
    .where({ _partial: false })
    .find();

  const blogPosts = docs.filter((doc) => doc?._path?.includes('/posts'));
  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? '-',
      url: `${useRuntimeConfig().siteUrl}${doc._path}`,
      date: doc.publishDate,
      description: doc.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  
  event.node.res.setHeader('content-type', 'text/xml');
  event.node.res.end(feedString);
});
