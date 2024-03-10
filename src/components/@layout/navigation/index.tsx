import React, { useState } from "react"
import { wrapper, inner, hide, logo } from "./navigation.module.css"
import { Link } from "gatsby"
import { SplitText } from "../../split-text"
import clsx from "clsx"
// import throttle from "lodash/throttle"
import { StaticImage } from "gatsby-plugin-image"
import { HOME_URL } from "../../../constants/links"
import ThemeBtn from "./themeBtn"

const Navigation = () => {
  const [showNavigation, setShowNavigation] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  // useEffect(() => {
  //   const handleScroll = throttle(() => {
  //     const currentScrollPos = window.scrollY

  //     if (prevScrollPos > currentScrollPos) {
  //       setShowNavigation(true)
  //     } else {
  //       setShowNavigation(false)
  //     }

  //     setPrevScrollPos(currentScrollPos)
  //   }, 300)

  //   if (typeof window !== "undefined") {
  //     setPrevScrollPos(window.scrollY)
  //     window.addEventListener("scroll", handleScroll)
  //   }

  //   return () => {
  //     if (typeof window !== "undefined") {
  //       window.removeEventListener("scroll", handleScroll)
  //     }
  //   }
  // }, [prevScrollPos])

  return (
    <nav className={clsx(wrapper, !showNavigation && hide)}>
      <ul className={inner}>
        <li>
          <Link to={HOME_URL}>
            <StaticImage
              className={logo}
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              placeholder="blurred"
              src="../../../../static/images/icon.png"
              width={35}
              height={35}
              quality={95}
              alt="logo"
            />
            <SplitText words="Suu.Blog" />
          </Link>
        </li>
        <li>
          <ThemeBtn />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
