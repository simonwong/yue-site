import { PropsWithChildren } from "react"

interface BlogSlugLayoutProps {}

const BlogSlugLayout: React.FC<PropsWithChildren<BlogSlugLayoutProps>> = ({ children }) => {
  return (
    <div className="prose dark:prose-invert prose-neutral">
      {children}
    </div>
  )
}

export default BlogSlugLayout
