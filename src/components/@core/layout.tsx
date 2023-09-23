import * as React from "react"
import Navigation from "../@layout/navigation"
import { motion } from "framer-motion"
import CategoryMenu from "../@layout/category-menu"

const Layout = ({ location, categories, children }) => {
  const rootPath = `${__PATH_PREFIX__}`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <Navigation />
      </header>
      {categories && (
        <CategoryMenu pathname={location.pathname} categories={categories} />
      )}
      <motion.main
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        {children}
      </motion.main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
