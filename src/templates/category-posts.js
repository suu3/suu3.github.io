import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/@layout/seo"
import PostListTemplate from "../components/@templates/post-list-template"

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
    allCategoriesInfo: allMarkdownRemark {
      totalCount
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
        totalCount
      }
    }
    allTagsInfo: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      group(field: { frontmatter: { tag: SELECT } }) {
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
          date(formatString: "YYYY.MM.DD")
          title
          description
          category
          tag
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 256
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
