import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, HeadFC, Link } from "gatsby"
import React, { FC, useState } from "react"
import "../styles/markdown-page.css"
import {
  faCoffee,
  faCaretRight,
  faCaretLeft
} from "@fortawesome/free-solid-svg-icons"

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        slug: string
      }
      html: string
      headings: {
        depth: number
        value: string
        id: string
      }[]
    }
  }
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
      }
      headings {
        depth
        value
        id
      }
    }
  }
`

export const Head: HeadFC = () => (
  <>
    <title>Hungry Gods</title>
    <link
      href="https://cdn.jsdelivr.net/gh/naturalcrit/homebrewery/phb.standalone.css"
      rel="stylesheet"
      type="text/css"
      crossOrigin=""
    />
  </>
)

const Template: FC<Props> = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html, headings } = markdownRemark

  const [closed, setClosed] = useState(false)
  const closedClass = closed ? "closed" : ""
  const caret = closed ? faCaretRight : faCaretLeft

  return (
    <div className="markdown-phb-style phb">
      <div className={`nav-tray-container ${closedClass}`}>
        <div className={`nav-tray ${closedClass}`}>
          {headings.map(({ depth, value, id }) => (
            <Link className="nav-link" to={`#${id}`}>
              <h4
                className="nav-item"
                style={{ marginLeft: `${(depth - 1) * 3}mm` }}
              >
                {value}
              </h4>
            </Link>
          ))}
        </div>
      </div>
      <div className="nav-expand" onClick={() => setClosed((c) => !c)}>
        <FontAwesomeIcon icon={caret} size="lg" color="#EEE5CE" />
      </div>
      <div className="markdown-align">
        <div
          className="markdown-html"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default Template
