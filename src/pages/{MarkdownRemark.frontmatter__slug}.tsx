import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, HeadFC, Link } from "gatsby"
import React, { FC } from "react"
import { useLocalStorage } from "usehooks-ts"
import "../styles/markdown-page.css"

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

  const [navState, setNavState] = useLocalStorage("nav-tray-state", "open")
  const caret = navState === "open" ? faCaretLeft : faCaretRight
  const toggleNavState = (state: string) =>
    state === "open" ? "closed" : "open"

  return (
    <div className="markdown-phb-style phb">
      <div className={`nav-tray-container ${navState}`}>
        <div className={`nav-tray ${navState}`}>
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
      <div className="nav-expand" onClick={() => setNavState(toggleNavState)}>
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
