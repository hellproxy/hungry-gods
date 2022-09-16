import { GatsbyBrowser } from "gatsby"
import React from "react"
import { Layout } from "./src/components/Layout"
import "./src/styles/global.css"

// Wraps every page in a component
export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element
}) => {
  return <Layout>{element}</Layout>
}
