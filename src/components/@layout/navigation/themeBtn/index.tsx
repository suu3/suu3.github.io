import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { ReactComponent as Sun } from "/static/images/sun.svg"
import { ReactComponent as Moon } from "/static/images/moon.svg"
import { wrapper, inner, btn } from "./theme-btn.module.css"

const ThemeBtn = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches

      setTheme(prefersDarkMode ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    toggleClass(theme)
    console.log("theme", theme)
  }, [theme])

  const toggleClass = newTheme => {
    //toggle
    const body = document.querySelector("body")
    if (newTheme === "light") {
      body?.classList.add("light")
      body?.classList.remove("dark")
    } else {
      body?.classList.add("dark")
      body?.classList.remove("light")
    }
  }
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const spring = {
    type: "spring",

    stiffness: 700,
    damping: 30,
  }

  return (
    <motion.div
      onClick={toggleTheme}
      className={wrapper}
      animate={theme === "light" ? "light" : "dark"}
      initial={{ backgroundColor: "#ffffff", color: "#2a2b31" }}
      variants={{
        light: { backgroundColor: "#ffffff", color: "#2a2b31" },
        dark: { backgroundColor: "#2A2B31", color: "#ffffff" },
      }}
    >
      <motion.div
        className={inner}
        layout
        transition={spring}
        animate={theme === "light" ? "light" : "dark"}
        initial={{ backgroundColor: "#d9d9d9" }}
        variants={{
          light: { backgroundColor: "#d9d9d9" },
          dark: { backgroundColor: "#3D3937" },
        }}
      >
        <motion.button
          className={btn}
          whileTap={{ rotate: 360 }}
          animate={theme === "light" ? "light" : "dark"}
          initial={{ x: 0, backgroundColor: "#ff740f", color: "#2a2b31" }}
          variants={{
            light: { x: 0, backgroundColor: "#ff740f", color: "#2a2b31" },
            dark: { x: 30, backgroundColor: "#FF8B66", color: "#ffffff" },
          }}
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
export default ThemeBtn
