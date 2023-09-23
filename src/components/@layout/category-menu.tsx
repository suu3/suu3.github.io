import { Link } from "gatsby"
import React, { useState } from "react"
import { list, active, inactive } from "./category-menu.module.css"
import { withPrefix } from "gatsby"

const CategoryMenu = ({ categories = [], pathname = "" }) => {
  const [clicked, setClicked] = useState(pathname)
  const listClassName = (category: string) =>
    clicked === withPrefix(category) ? active : inactive

  const handleClickMenu = (category: string) => {
    setClicked(category)
  }

  return (
    <ul className={list}>
      <Link to="/home" onClick={() => handleClickMenu(withPrefix("/home"))}>
        <li className={listClassName("/home")}>All</li>
      </Link>
      {categories.map((category: string) => (
        <Link
          key={category}
          to={`/${category}`}
          onClick={() => handleClickMenu(withPrefix(`/${category}`))}
        >
          <li className={listClassName(`/${category}`)}>{category}</li>
        </Link>
      ))}
    </ul>
  )
}

export default CategoryMenu
