import React from "react"
import { wrapper, icon } from "./footer.module.css"
import { ReactComponent as Github } from "/static/images/github.svg"

const Footer = () => {
  return (
    <footer className={wrapper}>
      <p>@suu3</p>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/suu3"
          >
            <Github className={icon} />
          </a>
        </li>
      </ul>
      <p>
        © {new Date().getFullYear()}, Built with{` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
