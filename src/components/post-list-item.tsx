import React from "react"
import {
  item,
  box,
  categoryCls,
  arrow,
  inner,
  topBar,
} from "./post-list-item.module.css"
// import Arrow from "./arrow"
import Badge from "./badge"
import { withPrefix } from "gatsby"
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
  const badges = tag?.map(item => {
    return <Badge key={item}>{item}</Badge>
  })

  return (
    <article className={box} itemScope itemType="http://schema.org/Article">
      <div
        className={topBar}
        style={{
          backgroundImage: `url(${withPrefix("/images/grid-vert-2.svg")})`,
        }}
      />
      {/* <Arrow direction="right" className={arrow} /> */}
      <span className={arrow}>→</span>
      <div className={inner}>
        {category && <p className={categoryCls}>{category}</p>}
        {badges && <div>{badges}</div>}
        <div className={item}>
          <h2>
            <span itemProp="headline">{title}</span>
          </h2>
          <small>{date}</small>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              itemProp="description"
            />
          </section>
        </div>
      </div>
    </article>
  )
}

export default PostListItem
