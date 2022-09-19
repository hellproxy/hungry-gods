import React, { FC, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import "../styles/layout.css"
import { Library } from "./Library"
import { LibraryButton } from "./LibraryButton"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [libraryVisible, setLibraryVisible] = useState(false)

  console.log(`Ref: ${ref.current}`)

  useOnClickOutside(ref, () => setLibraryVisible(false))

  return (
    <nav className="page">
      <div className="header-and-library" ref={ref}>
        <div className="header">
          <div className="left-align" />
          <div className="title">Hungry Gods</div>
          <div className="right-align">
            <LibraryButton onClick={() => setLibraryVisible((v) => !v)} />
          </div>
        </div>
        <Library visible={libraryVisible} />
      </div>
      <div className="body">{children}</div>
    </nav>
  )
}
