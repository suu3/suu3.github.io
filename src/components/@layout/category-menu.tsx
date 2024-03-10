import { Link } from "gatsby"
import React, { useState } from "react"
import { wrapper, header, active, inactive } from "./category-menu.module.css"
import { withPrefix } from "gatsby"
import { HOME_URL } from "../../constants/links"

const CategoryMenu = ({ categories = {}, pathname = "" }) => {
  const [clicked, setClicked] = useState(decodeURI(pathname).split("/page/")[0])
  const { totalCount, group } = categories

  const listClassName = (category: string) =>
    clicked === withPrefix(category) ? active : inactive

  const handleClickMenu = (category: string) => {
    setClicked(category)
  }

  return (
    <div className={wrapper}>
      <header className={header}>
        <p>Category</p>
        {/* <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 13L10 6L17 13"
              stroke="#2A2B31"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> */}
      </header>
      <ul>
        <Link
          to={HOME_URL}
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
    </div>
  )
}

export default CategoryMenu
