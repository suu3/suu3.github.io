import React, { ReactNode } from "react"
import { item, box, header, arrow } from "./post-list-item.module.css"
import Arrow from "./arrow"

interface PostListItemProps {
  title: string
  date: string
  description: string | TrustedHTML
}

const PostListItem = ({ title, date, description }: PostListItemProps) => {
  return (
    <article className={box} itemScope itemType="http://schema.org/Article">
      {/* <Arrow direction="right" className={arrow} /> */}
      <span className={arrow}>→</span>
      <div className={item}>
        <header className={header}>
          <h2>
            <span itemProp="headline">{title}</span>
          </h2>
          <small>{date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            itemProp="description"
          />
        </section>
      </div>{" "}
    </article>
  )
}

export default PostListItem
