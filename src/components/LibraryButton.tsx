import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useWindowSize } from "usehooks-ts"
import "../styles/library-button.css"

export const LibraryButton = () => {
  const { width } = useWindowSize()

  return (
    <button className="library-button">
      {width > 800 && <div className="library-text">Library</div>}
      <FontAwesomeIcon icon={faLinesLeaning} size="sm" color="white" />
    </button>
  )
}
