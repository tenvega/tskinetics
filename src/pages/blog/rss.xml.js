import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });
  
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

  return rss({
    title: 'TSK Sound Kits Blog - Music Production Insights',
    description: 'Dive deep into music production techniques, sample pack creation, and sound design workflows from Tehn Vega.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: post.data.author,
      categories: post.data.tags,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}