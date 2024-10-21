import React from "react"

interface PropTypes {
  children: React.ReactNode
  className?: string | null | undefined
}
function CardContainer({ children, className }: PropTypes) {
  return (
    <div
      className={
        className ??
        "rounded-lg bg-white w-full h-full shadow-lg shadow-black/5 p-5"
      }
    >
      {children}
    </div>
  )
}

export default CardContainer
