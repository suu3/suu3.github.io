import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/@layout/seo"
import PostListTemplate from "../components/@templates/post-list-template"

const Home = ({ data, location, pageContext }) => {
  return <PostListTemplate {...{ data, location, pageContext }} />
}

export default Home

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
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
    allTagsInfo: allMarkdownRemark {
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
