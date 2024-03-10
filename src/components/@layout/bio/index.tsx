/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { profile } from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className={profile}>
      <header>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
          src="../../../../static/images/icon.png"
          width={64}
          height={64}
          quality={95}
          alt="logo"
        />

        <div>
          <span>@{author?.name}</span>
          <span>Developer</span>
        </div>
      </header>
      <p>프론트엔드 개발자입니다.</p>
    </div>
  )
}

export default Bio
