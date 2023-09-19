import React, { ReactNode } from "react"
import { wrapper, inner, menu } from "./navigation.module.css"
import { Link } from "gatsby"

const Navigation = ({ children }: { children: ReactNode }) => {
  return (
    <nav className={wrapper}>
      <ul className={inner}>
        <li className={menu}>
          <Link to="/">Suu3 Blog</Link>
        </li>
        {children}
      </ul>
    </nav>
  )
}

export default Navigation
