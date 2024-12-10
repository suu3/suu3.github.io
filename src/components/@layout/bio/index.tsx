/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { profile } from "./bio.module.css"
import profileImage from "./profile.gif"

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
        <img src={profileImage} width={64} height={64} alt="profile image" />

        <div>
          <span>@{author?.name}</span>
          <span>Developer</span>
        </div>
      </header>
      <p>그림과 음악이 좋은 프론트엔드 개발자</p>
    </div>
  )
}

export default Bio
