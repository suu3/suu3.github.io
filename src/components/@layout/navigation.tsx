import React, { ReactNode } from "react"
import { wrapper, inner, menu } from "./navigation.module.css"
import { Link } from "gatsby"
import { SplitText } from "../split-text"

const Navigation = ({ children }: { children: ReactNode }) => {
  return (
    <nav className={wrapper}>
      <ul className={inner}>
        <li className={menu}>
          <Link to="/">
            <SplitText words="SUU3 BLOG" />
          </Link>
        </li>
        {children}
      </ul>
    </nav>
  )
}

export default Navigation
