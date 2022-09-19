import { faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { FC } from "react"
import "../styles/library.css"

const links = [
  { link: "/lore", name: "Lore" },
  { link: "/characters", name: "Characters" }
]

interface Props {
  visible: boolean
}

export const Library: FC<Props> = ({ visible }) => (
  <div className={`library ${visible ? "visible" : "hidden"}`}>
    <ul>
      {links.map(({ link, name }, index) => (
        <li key={index}>
          <Link to={link}>
            <FontAwesomeIcon
              icon={faBook}
              size="sm"
              color="white"
              className="book-icon"
            />
            <span>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
