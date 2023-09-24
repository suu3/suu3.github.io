import { box } from "./badge.module.css"
import React from "react"

interface BadgeProps {
  children: React.ReactNode
}

const colors = [
  {
    background: "var(--color-primary)",
    color: "var(--color-heading-black)",
  },

  {
    background: "var(--color-secondary)",
    color: "#ffffff",
  },
  {
    background: "var(--color-tertiary)",
    color: "var(--color-heading-black)",
  },
  {
    background: "#6EC458",
    color: "var(--color-heading-black)",
  },
  {
    background: "#2A2F35",
    color: "#ffffff",
  },
  {
    background: "#60ABED",
    color: "var(--color-heading-black)",
  },
]

const Badge = ({ children }: BadgeProps) => {
  return <div className={box}># {children}</div>
}

export default Badge
