import React from "react"
import { Link, graphql } from "gatsby"

import TransitionMain from "../components/@layout/transition-main"
import Utterances from "../components/@core/utterances"
// import Bio from "../components/@layout/bio"
import Layout from "../components/@core/layout"
import Seo from "../components/@core/seo"
import Badge from "../components/badge"
import TableContents from "../components/table-contents"
import {
  blogPost,
  blogPostNav,
  category,
  badgeCls,
  dateCls,
  leftBox,
  rightBox,
} from "./blog-post.module.css"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  const badges = post.frontmatter.tag?.map(tag => {
    return <Badge key={tag}>{tag}</Badge>
  })

  return (
    <Layout location={location} title={siteTitle}>
      <TransitionMain>
        <TableContents content={post.tableOfContents} />
        <article
          className={blogPost}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <p className={category}>{post.frontmatter.category}</p>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p className={dateCls}>{post.frontmatter.date}</p>
            <p className={badgeCls}>{badges}</p>
            <hr />
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />
          {/* <footer>
          <Bio />
        </footer> */}
        </article>
        <nav className={blogPostNav}>
          <ul>
            <li>
              {previous && (
                <Link className={leftBox} to={previous.fields.slug} rel="prev">
                  <span>
                    <span>←</span> 이전 글
                  </span>

                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link className={rightBox} to={next.fields.slug} rel="next">
                  <span>
                    다음 글 <span>→</span>
                  </span>
                  {next.frontmatter.title}
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <Utterances />
      </TransitionMain>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
        tag
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
