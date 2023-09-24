import * as React from "react"
import Navigation from "../@layout/navigation"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Navigation />
      </header>
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
