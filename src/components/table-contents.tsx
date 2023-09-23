import React from "react"
import { wrapper, inner, header } from "./table-contents.module.css"

interface TableContentsProps {
  content: string
}

const TableContents = ({ content = "" }: TableContentsProps) => {
  return (
    <aside className={wrapper}>
      <div className={inner}>
        {/* <header className={header}>INDEX</header> */}

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </aside>
  )
}

export default TableContents
