import { faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { FC, RefObject } from "react"
import "../styles/library.css"

export const links = [
  // { link: "/lore", name: "Lore" },
  // { link: "/characters", name: "Characters" },
  { link: "/races", name: "Races" }
]

export const Library: FC<{}> = () => (
  <div className="library">
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
