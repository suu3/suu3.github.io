import React from "react"
import {
  item,
  thumbnailCls,
  box,
  img,
  descriptionCls,
  badgesCls,
  inner,
  badge,
} from "./post-list-item.module.css"
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
  getImage,
} from "gatsby-plugin-image"
// import Arrow from "./arrow"

interface PostListItemProps {
  title: string
  date: string
  description: string | TrustedHTML
  tag: string[]
  category?: string
  thumbnail?: IGatsbyImageData
}

const PostListItem = ({
  title,
  date,
  description,
  category,
  tag = [],
  thumbnail,
}: PostListItemProps) => {
  const thumbnailImg = getImage(thumbnail)
  console.log(thumbnail)
  const badges = tag?.map(item => (
    <span className={badge} key={item}>
      #{item}
    </span>
  ))

  return (
    <article className={box} itemScope itemType="http://schema.org/Article">
      {category && <header>{category}</header>}
      <div className={inner}>
        <div className={thumbnailCls}>
          <span>{category}</span>
          {thumbnailImg ? (
            <GatsbyImage className={img} image={thumbnailImg} alt="" />
          ) : (
            <StaticImage
              className={img}
              formats={["auto", "webp", "avif"]}
              placeholder="blurred"
              src="../../static/images/dummy.jpg"
              width={256}
              height={157}
              quality={95}
              alt=""
            />
          )}
        </div>
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
