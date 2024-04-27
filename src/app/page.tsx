import { getBlogPosts } from "@/db/blog";

const HomePage = () => {
  const allBlogs = getBlogPosts();
  const blogs = allBlogs.slice(0, 3);

  return (
    <div>
      <h2 className="text-3xl mb-5">最近发布</h2>
      {
        blogs.map(blg => (
          <li className="list-none mb-3">
            <a href={`/blog/${blg.slug}`}>
              <div className="mb-0.5 text-pretty font-sans text-xl font-medium text-gray-800 transition-colors hover:text-black dark:text-gray-100 dark:hover:text-white">
                {blg.metadata.title}
              </div>
            </a>
            <div className="flex gap-1.5 pb-2 text-sm text-gray-400 dark:text-gray-500">
              <time dateTime={blg.metadata.pubDate}>{blg.metadata.pubDate}</time>
            </div>
          </li>
        ))
      }
    </div>
  );
}

export default HomePage
