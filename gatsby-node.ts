import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/lore`,
    redirectInBrowser: true,
    isPermanent: true
  })
}
