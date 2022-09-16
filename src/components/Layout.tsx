import React, { FC } from "react"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      className="hello"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </div>
  )
}
