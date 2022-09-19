import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC, MouseEventHandler } from "react"
import { useWindowSize } from "usehooks-ts"
import "../styles/library-button.css"

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const LibraryButton: FC<Props> = ({ onClick }) => {
  const { width } = useWindowSize()

  return (
    <button className="library-button" onClick={onClick}>
      {width > 800 && <div className="library-text">Library</div>}
      <FontAwesomeIcon icon={faLinesLeaning} size="sm" color="white" />
    </button>
  )
}
