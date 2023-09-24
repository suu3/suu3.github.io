import * as React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../@core/layout"
import PostListItem from "../post-list-item"
import Pagination from "rc-pagination"
import CategoryMenu from "./category-menu"
import TransitionMain from "./transition-main"
import { POST_PER_PAGE } from "../../constants/page"
import { paginationCls } from "./post-list-template.module.css"

const PostListTemplate = ({ data, location, pageContext }) => {
  const { currentPage, totalCount } = pageContext
  const categories = data.allPostsInfo
  const posts = data.allMarkdownRemark.nodes

  const handlePageChange = (page: number) => {
    const pathname =
      currentPage === 1
        ? location.pathname
        : location.pathname.split("/").slice(0, -1).join("/")
    navigate(page === 1 ? pathname : `${pathname}/${page}`)
  }

  const textItemRender = (current, type, element) => {
    if (type === "prev") {
      return "←"
    }
    if (type === "next") {
      return "→"
    }
    return element
  }
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
                category={post.frontmatter?.category}
                tag={post.frontmatter.tag}
                description={post.frontmatter.description || post.excerpt}
              />
            </Link>
          </li>
        )
      })
    )

  return (
    <Layout location={location}>
      {categories && (
        <CategoryMenu pathname={location.pathname} categories={categories} />
      )}
      <TransitionMain>
        <ol style={{ listStyle: `none` }}>{renderPosts}</ol>
      </TransitionMain>
      <Pagination
        itemRender={textItemRender}
        current={currentPage}
        onChange={handlePageChange}
        className={paginationCls}
        total={totalCount}
        pageSize={POST_PER_PAGE}
      />
    </Layout>
  )
}

export default PostListTemplate
