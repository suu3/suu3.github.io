/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 * https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // pathPrefix: "/blog",
  siteMetadata: {
    title: `Suu.Blog`,
    author: {
      name: `suu3`,
      summary: `Suu.Blog`,
    },
    description: `@suu3의 기술 블로그`,
    siteUrl: `https://suu3.github.io/home/1`,
    favicon: "/favicon.ico",
    // social: {
    //   twitter: `kylemathews`,
    // },
  },
  plugins: [
    "gatsby-plugin-pnpm",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-copy-relative-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs", // should be placed after `gatsby-remark-autolink-headers`
          {
            resolve: "gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 400,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, //https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      options: {
        name: `Suu3 Blog`,
        short_name: `Suu3 Blog`,
        start_url: `/home/1`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#ff6737`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `static/favicons/favicon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `static/favicons/favicon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `static/favicons/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `static/favicons/favicon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `static/favicons/favicon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/favicons/favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            }, // remove viewBox when possible (default)
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KZHNKFDT",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-3886701004172830`,
      },
    },
  ],
  // trailingSlash: `never`, // url 뒤 행 슬래쉬 trailing slash
}
