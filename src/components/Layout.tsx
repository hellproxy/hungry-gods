import React, { FC } from "react"
import "../styles/layout.css"

interface Props {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return <div className="layout">{children}</div>
}
