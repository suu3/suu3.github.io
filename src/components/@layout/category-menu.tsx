import { Link } from "gatsby"
import React, { useState } from "react"
import { list, active, inactive } from "./category-menu.module.css"
import { withPrefix } from "gatsby"

const CategoryMenu = ({ categories = {}, pathname = "" }) => {
  const [clicked, setClicked] = useState(pathname)
  const { totalCount, group } = categories

  const listClassName = (category: string) =>
    clicked === withPrefix(category) ? active : inactive

  const handleClickMenu = (category: string) => {
    setClicked(category)
  }

  return (
    <ul className={list}>
      <Link to="/home" onClick={() => handleClickMenu(withPrefix("/home"))}>
        <li className={listClassName("/home")}>All ({totalCount})</li>
      </Link>
      {group.map(({ fieldValue, totalCount }: string) => (
        <Link
          key={fieldValue}
          to={`/${fieldValue}`}
          onClick={() => handleClickMenu(withPrefix(`/${fieldValue}`))}
        >
          <li className={listClassName(`/${fieldValue}`)}>
            {fieldValue} ({totalCount})
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default CategoryMenu
