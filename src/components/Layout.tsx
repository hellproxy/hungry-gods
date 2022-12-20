import React, { FC, useRef, useState } from "react"
import { useOnClickOutside } from "../hooks/useOnClickOutside"
import "../styles/layout.css"
import { Library } from "./Library"
import { LibraryButton } from "./LibraryButton"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null)
  const libraryRef = useRef<HTMLDivElement>(null)
  const [libraryVisible, setLibraryVisible] = useState(false)

  const visibleClass = libraryVisible ? "visible" : "hidden"

  useOnClickOutside([headerRef, libraryRef], () => setLibraryVisible(false))

  return (
    <nav className="page">
      <div className="header" ref={headerRef}>
        <div className="left-align" />
        <div className="title">Hungry Gods</div>
        <div className="right-align">
          <LibraryButton onClick={() => setLibraryVisible((v) => !v)} />
        </div>
      </div>
      <div className="pane">
        <div className="body">{children}</div>
        <div className="library-seam">
          <div className={`library-drawer ${visibleClass}`} ref={libraryRef}>
            <Library />
          </div>
        </div>
      </div>
    </nav>
  )
}
