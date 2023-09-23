import { Link } from "gatsby"
import React from "react"

const CategoryMenu = ({ categories }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/${category}/`}>{category}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryMenu
