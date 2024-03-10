import React from "react"
import { Link, graphql } from "gatsby"
import { ReactComponent as LeftArrow } from "/static/images/left-arrow.svg"

import TransitionMain from "../components/@layout/main"
import Utterances from "../components/@layout/utterances"
// import Bio from "../components/@layout/bio"
import Layout from "../components/@layout"
import Seo from "../components/@layout/seo"
import TableContents from "../components/@layout/tableOfContents"
import { HOME_URL } from "../constants/links"
import {
  wrapper,
  left,
  mainArticle,
  blogPost,
  blogPostNav,
  badgesCls,
  badgeCls,
  leftBox,
  rightBox,
} from "./blog-post.module.css"
import { navigate } from "gatsby"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  const badges = post.frontmatter.tag?.map(tag => (
    <span className={badgeCls} key={tag}>
      #{tag}
    </span>
  ))

  return (
    <Layout location={location} title={siteTitle}>
      <TransitionMain>
        <article
          className={blogPost}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <small>
              <p>{post.frontmatter.date}</p>
              <div />
              <p>{post.frontmatter.category}</p>
            </small>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p className={badgesCls}>{badges}</p>
          </header>
          <div className={wrapper}>
            <div className={left}>
              <TableContents content={post.tableOfContents} />
              <button
                onClick={() => {
                  navigate(HOME_URL)
                }}
              >
                <LeftArrow />
                홈으로 가기
              </button>
            </div>
            <div className={mainArticle}>
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
              <Utterances />
              <nav className={blogPostNav}>
                <ul>
                  <li>
                    {previous && (
                      <Link
                        className={leftBox}
                        to={previous.fields.slug}
                        rel="prev"
                      >
                        <span>
                          {/* <span>←</span> */}
                          이전 글
                        </span>
                        <p>{previous.frontmatter.title}</p>
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link
                        className={rightBox}
                        to={next.fields.slug}
                        rel="next"
                      >
                        <span>다음 글{/* <span>→</span> */}</span>
                        <p>{next.frontmatter.title}</p>
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </article>
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
        date(formatString: "YYYY.MM.DD")
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
