import React, { ReactNode } from "react"
import { wrapper, inner } from "./navigation.module.css"

const Navigation = ({ children }: { children: ReactNode }) => {
  return (
    <nav className={wrapper}>
      <ul className={inner}>
        {/* <li>logo</li> */}
        {children}
      </ul>
    </nav>
  )
}

export default Navigation
