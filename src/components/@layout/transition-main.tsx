import React, { ReactNode } from "react"
import { motion } from "framer-motion"

const TransitionMain = ({ children }: { children: ReactNode }) => {
  return (
    <motion.main
      initial={{
        opacity: 0,
        x: -200,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 200,
      }}
      transition={{
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
    >
      {children}
    </motion.main>
  )
}

export default TransitionMain
