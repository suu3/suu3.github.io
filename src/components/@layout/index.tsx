import * as React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Navigation />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header"></header>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
