import React from "react"
import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { wrapper, motionDiv, container, spacing } from "./split-text.module.css"

interface SplitTextProps {
  words: string
  className?: string
  style?: React.CSSProperties
}

export function SplitText({ words, ...rest }: SplitTextProps) {
  return words.split("").map((word: string, i) => (
    <AnimatePresence key={words + i}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={container}
      >
        <div className={wrapper}>
          <motion.div
            initial={{ y: "100%" }}
            animate="visible"
            variants={{
              visible: i => ({
                y: 0,
                transition: {
                  delay: i * 0.1,
                },
              }),
            }}
            className={clsx(motionDiv, word === " " && spacing)}
            custom={i}
          >
            {word}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  ))
}
