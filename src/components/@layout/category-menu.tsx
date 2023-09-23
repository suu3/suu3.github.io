import { Link } from "gatsby"
import React, { useCallback, useState } from "react"
import { list, active, inactive } from "./category-menu.module.css"

const CategoryMenu = ({ categories, pathname }) => {
  const [clicked, setClicked] = useState(pathname)

  const handleClickMenu = category => {
    setClicked(category)
  }

  return (
    <ul className={list}>
      <Link to="/">
        <li
          onClick={() => handleClickMenu("/")}
          className={clicked === "/" ? active : inactive}
        >
          All
        </li>
      </Link>
      {categories.map(category => (
        <Link to={`/${category}`}>
          {" "}
          <li
            onClick={() => handleClickMenu(`/${category}`)}
            className={clicked === `/${category}` ? active : inactive}
            key={category}
          >
            {category}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default CategoryMenu
