import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/@core/layout"
import Seo from "../components/@core/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>존재하지 않는 페이지입니다.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
