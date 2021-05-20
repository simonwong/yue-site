import * as React from 'react'
import { graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

/**
 * 接入 https://utteranc.es/
 */

const IndexPage = ({ data }) => {
  console.log(`data`, data)
  // const { totalCount, edges } = data.allMarkdownRemark

  return (
    <Layout>
      <Seo title="Home" />
      {/* <h1>Hi people</h1>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))} */}
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_RWZde1.json"
        background="transparent"
        speed="1"
        style={{
          width: '100%',
          height: '100%',
        }}
        loop
        autoplay
      />
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
