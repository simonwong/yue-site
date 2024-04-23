'use client'

interface BlogSlugPageProps {
  params: {
    slug: string
  }
}

const BlogSlugPage: React.FC<BlogSlugPageProps> = async ({ params }) => {
  const Blog = await import(`@/content/${params.slug}.md`)
  return (
    <Blog.default />
  )
}

export default BlogSlugPage
