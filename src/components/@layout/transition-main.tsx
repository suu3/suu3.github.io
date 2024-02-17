import React, { ReactNode } from "react"
import { motion } from "framer-motion"

const TransitionMain = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    // <motion.main
    //   className={className}
    //   initial={{
    //     opacity: 0,
    //     x: -200,
    //   }}
    //   animate={{
    //     opacity: 1,
    //     x: 0,
    //   }}
    //   exit={{
    //     opacity: 0,
    //     x: 200,
    //   }}
    //   transition={{
    //     type: "spring",
    //     mass: 0.35,
    //     stiffness: 75,
    //     duration: 0.15,
    //   }}
    // >
    <main className={className}>{children}</main>
    // </motion.main>
  )
}

export default TransitionMain
