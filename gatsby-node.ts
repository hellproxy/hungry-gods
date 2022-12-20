import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/races`,
    redirectInBrowser: true,
    isPermanent: true
  })
}
