import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/@core/seo"
import PostListTemplate from "../components/@layout/post-list-template"

const BlogIndex = ({ data, location }) => {
  return <PostListTemplate {...{ data, location }} />
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      categoryList: distinct(field: { frontmatter: { category: SELECT } })
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          tag
        }
      }
    }
  }
`
