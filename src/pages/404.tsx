import * as React from "react"
import { Link, HeadFC } from "gatsby"
import { FC } from "react"
import "../styles/phb-overrides.css"
import "../styles/not-found.css"

const NotFoundPage: FC<never> = () => (
  <main className="page-main phb phb-overrides">
    <h2>Page not found</h2>
    <br />
    <p>
      Sorry, we couldn’t find what you were looking for.{" "}
      <Link to="/">Go home</Link>.
    </p>
  </main>
)

export default NotFoundPage
export { Head } from "../components/Head"
