import React, { ReactNode, useEffect, useState } from "react"
import { wrapper, inner, menu, hide, icon } from "./navigation.module.css"
import { Link } from "gatsby"
import { SplitText } from "../split-text"
import clsx from "clsx"
import { ReactComponent as Github } from "/static/images/github.svg"
import throttle from "lodash/throttle"

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollPos = window.scrollY

      if (prevScrollPos > currentScrollPos) {
        setShowNavigation(true)
      } else {
        setShowNavigation(false)
      }

      setPrevScrollPos(currentScrollPos)
    }, 300)

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])

  return (
    <nav className={clsx(wrapper, !showNavigation && hide)}>
      <ul className={inner}>
        <li className={menu}>
          <Link to="/">
            <SplitText words="SUU3 BLOG" />
          </Link>
        </li>
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
    </nav>
  )
}

export default Navigation
