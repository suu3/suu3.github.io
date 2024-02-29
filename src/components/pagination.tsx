import React from "react"
import clsx from "clsx"
import * as styles from "./pagination.module.css"

type PaginationProps = {
  pagesToShow?: number
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = ({
  pagesToShow = 10,
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages
  console.log(currentPage, totalPages)
  const ellipsis = "..."
  const halfPagesToShow = Math.floor(pagesToShow / 2) // 5 => 2, 6 => 3

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  const getPageNumbers = () => {
    if (totalPages <= pagesToShow)
      // 1. 전체 페이지 수가 보여줄 페이지 개수보다 작거나 같을 때 : ...없이 모든 페이지를 보여준다.
      return Array.from({ length: totalPages }, (_, i) => i + 1)

    // 2. 페이지 수가 pageToShow를 넘었을 때
    if (currentPage <= halfPagesToShow)
      // 2-1. 첫 번째 그룹 ex) 1 2 3 4 5 ... 40
      return [
        ...Array.from({ length: pagesToShow }, (_, i) => i + 1),
        ellipsis,
        totalPages,
      ]
    else if (currentPage > totalPages - halfPagesToShow)
      // 2-2. 중간 그룹 ex) 1 ... 2 3 4 5 ... 40
      return [
        1,
        ellipsis,
        ...Array.from(
          { length: pagesToShow },
          (_, i) => totalPages - pagesToShow + i + 1
        ),
      ]
    // 2-3. 마지막 그룹 ex) 1 ... 36 37 38 39 40
    else
      return [
        1,
        ellipsis,
        ...Array.from(
          { length: pagesToShow },
          (_, i) => currentPage - halfPagesToShow + i
        ),
        ellipsis,
        totalPages,
      ]
  }

  const renderPages = getPageNumbers().map((page, i) => {
    const isActive = page === currentPage
    const isEllipsis = page === ellipsis
    return (
      <span
        key={`${page} + ${i}`}
        onClick={() => {
          if (isEllipsis) return
          onPageChange(Number(page))
        }}
        className={clsx(styles["page"], {
          [styles["active"]]: isActive,
          [styles["ellipsis"]]: isEllipsis,
        })}
      >
        {page}
      </span>
    )
  })

  return (
    <div className={styles["wrapper"]}>
      <button
        onClick={handlePrevPage}
        className={clsx(styles["btn"], {
          [styles["prevBtn"]]: true,
          [styles["disabled"]]: isFirstPage,
        })}
      >
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 15L0.999998 8L8 1"
            stroke="#2A2B31"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* <Image
          src={prevArrow}
          width={24}
          height={24}
          alt="Prev Button"
          
        /> */}
      </button>
      <ol className={styles["pages"]}>{renderPages}</ol>
      <button
        className={clsx(styles["btn"], styles["nextBtn"], {
          [styles["disabled"]]: isLastPage,
        })}
        onClick={handleNextPage}
      >
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L8 8L0.999999 15"
            stroke="#2A2B31"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* <Image
          src={nextArrow}
          width={24}
          height={24}
          alt="Next Button"
          onClick={handleNextPage}
        /> */}
      </button>
    </div>
  )
}

export default Pagination
