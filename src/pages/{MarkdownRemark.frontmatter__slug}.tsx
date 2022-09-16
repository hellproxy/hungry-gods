import { graphql, HeadFC } from "gatsby"
import React, { FC } from "react"

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        slug: string
      }
      html: string
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
  const { html } = markdownRemark
  return (
    <div
      className="markdown-content phb"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Template
