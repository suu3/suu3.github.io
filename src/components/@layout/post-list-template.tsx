import * as React from "react"
import { Link, navigate } from "gatsby"
import Layout from "../@core/layout"
import PostListItem from "../post-list-item"
// import Pagination from "rc-pagination"
import Pagination from "../pagination"
import CategoryMenu from "./category-menu"
import TransitionMain from "./transition-main"
import { POST_PER_PAGE } from "../../constants/page"
import {
  main,
  mainWrapper,
  ol,
  sideMenu,
  profile,
} from "./post-list-template.module.css"
import { StaticImage } from "gatsby-plugin-image"

const PostListTemplate = ({ data, location, pageContext }) => {
  const { currentPage, totalCount } = pageContext
  const categories = data.allCategoriesInfo
  const posts = data.allMarkdownRemark.nodes
  const tags = data.allTagsInfo

  const pathname = location.pathname.split("/page/")[0].replace("/blog", "")
  const handlePageChange = (page: number) => {
    navigate(`${pathname}/page/${page}/`)
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
      <div className={mainWrapper}>
        <aside className={sideMenu}>
          <div className={profile}>
            <header>
              <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                placeholder="blurred"
                src="../../../static/images/icon.png"
                width={64}
                height={64}
                quality={95}
                alt="logo"
              />

              <div>
                <span>@suu3</span>
                <span>Developer</span>
              </div>
            </header>
            <p>프론트엔드 개발자입니다.</p>
          </div>
          {categories && (
            <CategoryMenu
              pathname={location.pathname}
              categories={categories}
            />
          )}
        </aside>
        <TransitionMain className={main}>
          <h1>Latest</h1>
          <ol className={ol}>{renderPosts}</ol>
          <hr />
          <Pagination
            onPageChange={handlePageChange}
            currentPage={currentPage}
            totalPages={Math.ceil(totalCount / POST_PER_PAGE)}
          />
        </TransitionMain>
      </div>
    </Layout>
  )
}

export default PostListTemplate
