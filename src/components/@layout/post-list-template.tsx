import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../@core/layout"
import PostListItem from "../post-list-item"

const PostListTemplate = ({ data, location }) => {
  const categories = data.allMarkdownRemark.categoryList
  const posts = data.allMarkdownRemark.nodes

  const renderPosts =
    posts.length === 0 ? (
      <p>게시물이 없습니다.</p>
    ) : (
      posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <li key={post.fields.slug}>
            <Link to={post.fields.slug} itemProp="url">
              <PostListItem
                title={title}
                date={post.frontmatter.date}
                tag={post.frontmatter.tag}
                description={post.frontmatter.description || post.excerpt}
              />
            </Link>
          </li>
        )
      })
    )

  return (
    <Layout location={location} categories={categories}>
      <ol style={{ listStyle: `none` }}>{renderPosts}</ol>
    </Layout>
  )
}

export default PostListTemplate
