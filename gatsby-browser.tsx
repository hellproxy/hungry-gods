import { GatsbyBrowser } from "gatsby"
import React from "react"
import { Layout } from "./src/components/Layout"

// Wraps every page in a component
export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
    element,
})=> {
    return <Layout>{element}</Layout>
}
