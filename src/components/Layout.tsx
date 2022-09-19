import React, { FC } from "react"
import "../styles/layout.css"
import { LibraryButton } from "./LibraryButton"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <nav className="page">
      <div className="header">
        <div className="left-align" />
        <div className="title">Hungry Gods</div>
        <div className="right-align">
          <LibraryButton />
        </div>
      </div>
      <div className="body">{children}</div>
    </nav>
  )
}
