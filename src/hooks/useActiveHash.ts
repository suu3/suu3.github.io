import { useEffect, useState } from "react"

/**
 * @link https://stackoverflow.com/questions/23269951/how-to-get-all-elements-with-a-specified-href-attribute
 */
export const useActiveHash = (itemIds, rootMargin = undefined) => {
  const [activeHash, setActiveHash] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id)
          }
        })
      },
      { rootMargin: rootMargin || `0% 0% -80% 0%` }
    )

    itemIds.forEach(id => {
      const element = document?.getElementById(id)

      if (element) observer?.observe(element)
    })

    return () => {
      itemIds?.forEach(id => {
        const element = document?.getElementById(id)

        if (element) observer?.unobserve(element)
      })
    }
  }, [])

  return activeHash
}
