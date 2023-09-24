import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/@core/seo"
import PostListTemplate from "../components/@layout/post-list-template"

const CategoryPost = ({ data, location, pageContext }) => {
  return <PostListTemplate {...{ data, location, pageContext }} />
}

export default CategoryPost
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query ($category: String!, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allPostsInfo: allMarkdownRemark {
      totalCount
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
        totalCount
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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