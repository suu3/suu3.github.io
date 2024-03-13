import React, { createRef, useLayoutEffect } from "react"

const src = "https://utteranc.es/client.js"

const Utterances = React.memo(() => {
  const containerRef = createRef<HTMLDivElement>()

  useLayoutEffect(() => {
    const utterances = document.createElement("script")

    const attributes = {
      src,
      repo: "suu3/blog-utterance",
      "issue-term": "pathname",
      label: "comment",
      theme: "github-light",
      crossOrigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    if (containerRef.current) containerRef.current.appendChild(utterances)
  }, [])

  return <div ref={containerRef} />
})

Utterances.displayName = "Utterances"

export default Utterances
