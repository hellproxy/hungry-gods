import React, { FC, useState } from "react"
import "../styles/layout.css"
import { Library } from "./Library"
import { LibraryButton } from "./LibraryButton"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const [libraryVisible, setLibraryVisible] = useState(false)

  return (
    <nav className="page">
      <div className="header">
        <div className="left-align" />
        <div className="title">Hungry Gods</div>
        <div className="right-align">
          <LibraryButton onClick={() => setLibraryVisible((v) => !v)} />
        </div>
      </div>
      <Library visible={libraryVisible} />
      <div className="body">{children}</div>
    </nav>
  )
}
