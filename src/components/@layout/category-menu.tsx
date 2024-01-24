import { Link } from "gatsby"
import React, { useState } from "react"
import { list, active, inactive } from "./category-menu.module.css"
import { withPrefix } from "gatsby"

const CategoryMenu = ({ categories = {}, pathname = "" }) => {
  const [clicked, setClicked] = useState(`/${pathname.split("/")[1]}`)
  const { totalCount, group } = categories

  const listClassName = (category: string) => {
    console.log("clicked", clicked, "category", withPrefix(category))
    return clicked === withPrefix(category) ? active : inactive
  }

  const handleClickMenu = (category: string) => {
    setClicked(category)
  }

  return (
    <ul className={list}>
      <Link
        to="/home/page/1"
        onClick={() => handleClickMenu(withPrefix("/home"))}
      >
        <li className={listClassName("/home")}>전체 보기 ({totalCount})</li>
      </Link>
      {group.map(({ fieldValue, totalCount }: string) => (
        <Link
          key={fieldValue}
          to={`/${fieldValue}/page/1`}
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
