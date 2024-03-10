import React from "react"
import {
  item,
  box,
  categoryCls,
  descriptionCls,
  badgesCls,
  inner,
  badge,
} from "./post-list-item.module.css"
// import Arrow from "./arrow"

interface PostListItemProps {
  title: string
  date: string
  description: string | TrustedHTML
  tag: string[]
  category?: string
}

const PostListItem = ({
  title,
  date,
  description,
  category,
  tag = [],
}: PostListItemProps) => {
  const badges = tag?.map(item => (
    <span className={badge} key={item}>
      #{item}
    </span>
  ))

  return (
    <article className={box} itemScope itemType="http://schema.org/Article">
      {category && <header className={categoryCls}>{category}</header>}
      <div className={inner}>
        {badges && <div className={badgesCls}>{badges}</div>}
        <div className={item}>
          <h2>
            <span itemProp="headline">{title}</span>
          </h2>
          <section>
            <p
              className={descriptionCls}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              itemProp="description"
            />
          </section>
        </div>
      </div>
      <small>{date}</small>
    </article>
  )
}

export default PostListItem
