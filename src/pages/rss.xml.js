import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  return rss({
    title: 'Simon Wong | Blog',
    description: "Simon Wong's Blog",
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>zh-CN</language>`,
  })
}
