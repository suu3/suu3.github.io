import * as React from "react"
import { Link, graphql, navigate, withPrefix } from "gatsby"
import Layout from "../@core/layout"
import PostListItem from "../post-list-item"
import Pagination from "rc-pagination"
import CategoryMenu from "./category-menu"
import TransitionMain from "./transition-main"
import { POST_PER_PAGE } from "../../constants/page"
import {
  main,
  mainWrapper,
  ol,
  sideMenu,
  paginationCls,
} from "./post-list-template.module.css"
import Badge from "../badge"

const PostListTemplate = ({ data, location, pageContext }) => {
  const { currentPage, totalCount } = pageContext
  const categories = data.allCategoriesInfo
  const posts = data.allMarkdownRemark.nodes
  const tags = data.allTagsInfo

  const pathname = location.pathname.split("/page/")[0].replace("/blog", "")
  const handlePageChange = (page: number) => {
    navigate(`${pathname}/page/${page}/`)
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

      <div className={mainWrapper}>
        {/* <aside className={sideMenu}>
          <h3
            style={{
              padding: "0 8px 10px 8px",
              margin: "var(--spacing-2)",
            }}
          >
            Tags
          </h3>
          {tags.group.map(({ fieldValue, totalCount }) => (
            <Badge key={fieldValue}>{`${fieldValue} (${totalCount})`}</Badge>
          ))}
        </aside> */}
        <TransitionMain className={main}>
          <h1>Latest</h1>
          <hr />
          <ol className={ol}>{renderPosts}</ol>
          <hr />
          <Pagination
            itemRender={textItemRender}
            current={currentPage}
            className={paginationCls}
            onChange={handlePageChange}
            total={totalCount}
            pageSize={POST_PER_PAGE}
            jumpNextIcon={"..."}
            jumpPrevIcon={"..."}
          />
        </TransitionMain>
      </div>
    </Layout>
  )
}

export default PostListTemplate
