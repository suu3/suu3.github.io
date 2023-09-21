import clsx from "clsx"
import * as styles from "./arrow.module.css"
import React from "react"

interface ArrowProps {
  direction?: "left" | "right"
  className?: string
  width?: number
  height?: number
  color?: string
}
const Arrow = ({
  direction = "left",
  className,
  width = 20,
  height = 20,
  color = "var(--color-primary)",
}: ArrowProps) => {
  return (
    <div className={clsx(styles["arrow"], styles[direction], className)}>
      {Array.from({ length: 3 }).map(() => (
        <svg
          fill={color}
          height={`${height}px`}
          width={`${width}px`}
          viewBox="0 0 330 330"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      ))}
    </div>
  )
}

export default Arrow
