import React from "react"
import {
  item,
  box,
  header,
  arrow,
  badgeWrapper,
  inner,
  topBar,
} from "./post-list-item.module.css"
import Arrow from "./arrow"
import Badge from "./Badge"
import { withPrefix } from "gatsby"
interface PostListItemProps {
  title: string
  date: string
  description: string | TrustedHTML
  tag: string[]
}

const PostListItem = ({
  title,
  date,
  description,
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
      {badges && <div className={badgeWrapper}>{badges}</div>}
      <div className={inner}>
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
        </div>
      </div>
    </article>
  )
}

export default PostListItem
