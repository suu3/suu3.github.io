/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import { POST_PER_PAGE } from "./src/constants/page"

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect } = actions
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        limit: 1000
      ) {
        categoryList: distinct(field: { frontmatter: { category: SELECT } })
        nodes {
          id
          frontmatter {
            category
          }
          fields {
            slug
          }
        }
        totalCount
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // 카테고리 목록을 가져오고, 각 카테고리마다 페이지 생성
  const categories = result.data.postsRemark.categoryList
  const posts = result.data.postsRemark.nodes
  const postsPerPage = POST_PER_PAGE

  categories.forEach(category => {
    const categoryPosts = posts.filter(
      post => post.frontmatter.category === category
    )
    const numPages = Math.ceil(categoryPosts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: `/${category}/${i + 1}/`,
        component: path.resolve(`./src/templates/category-posts.js`), // Just like `createPage()`\
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          category,
          totalCount: categoryPosts.length,
        },
      })
    })
  })

  //home = all
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/home/${i + 1}/`,
      component: path.resolve(`./src/templates/home.tsx`), // Just like `createPage()`\
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        totalCount: posts.length,
      },
    })
  })
  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  createRedirect({
    fromPath: `/`,
    toPath: `/home/1`,
    redirectInBrowser: true,
    isPermanent: true,
  })

  createRedirect({
    fromPath: `/home/`,
    toPath: `/home/1`,
    redirectInBrowser: true,
    isPermanent: true,
  })

  createRedirect({
    fromPath: `/home/`,
    toPath: `/home/1`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error

  //@link https://github.com/gatsbyjs/gatsby/issues/4123
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tag: [String]
      thumbnail: File @fileByRelativePath 
    }

    type Fields {
      slug: String
    }
  `)
}
