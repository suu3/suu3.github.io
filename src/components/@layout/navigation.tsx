import React, { useEffect, useState } from "react"
import { wrapper, inner, hide, icon } from "./navigation.module.css"
import { Link } from "gatsby"
import { SplitText } from "../split-text"
import clsx from "clsx"
import { ReactComponent as Github } from "/static/images/github.svg"
import throttle from "lodash/throttle"

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

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

    if (typeof window !== "undefined") {
      setPrevScrollPos(window.scrollY)
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [prevScrollPos])

  return (
    <nav className={clsx(wrapper, !showNavigation && hide)}>
      <ul className={inner}>
        <li>
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
