import React from "react"
import { wrapper, inner, header } from "./table-contents.module.css"

interface TableContentsProps {
  content: string
}

const TableContents = ({ content = "" }: TableContentsProps) => {

  if(!content) return null;
  return (
    <aside className={wrapper}>
      <div className={inner}>
        <header className={header}>Index</header>

        <div dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </aside>
  )
}

export default TableContents
