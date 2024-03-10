import React, { useEffect, useMemo } from "react"
import { wrapper, inner, header, active } from "./table-contents.module.css"
import { useActiveHash } from "../../../hooks/useActiveHash"

interface TableContentsProps {
  content: string
}

const TableContents = ({ content = "" }: TableContentsProps) => {
  let targetedIds = useMemo(() => {
    if (!document) return
    const dummyDOM = document.createElement("html")
    dummyDOM.innerHTML = content
    const justAnchors = dummyDOM.querySelectorAll(`a`)

    let anchorList = []
    justAnchors.forEach(a => {
      anchorList.push(decodeURI(a.hash.replace("#", "")))
    })

    return anchorList
  }, [document])

  const activeHash = useActiveHash(targetedIds)

  useEffect(() => {
    const ToClinks = document.querySelectorAll(`.table-of-contents a`)

    ToClinks.forEach(a => {
      a.classList.remove(active)
    })

    const activeLink = document.querySelectorAll(
      `.table-of-contents a[href="${"#" + encodeURI(activeHash)}"]`
    )

    if (activeLink.length) {
      activeLink[0].classList.add(active)
    }
  }, [activeHash])

  if (!content) return null
  return (
    <aside className={wrapper}>
      <div className={inner}>
        <header className={header}>Index</header>

        <div
          className="table-of-contents"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </aside>
  )
}

export default TableContents
