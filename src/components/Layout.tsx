import React, { FC } from "react"
import "../styles/layout.css"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <nav className="page">
      <div className="header">Hungry Gods</div>
      <div className="body">{children}</div>
    </nav>
  )
}
