import React from "react"
import { footerCls } from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={footerCls}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer
