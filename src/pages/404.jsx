import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"

const NotFound = () => (
  <Layout>
    <div style={{ textAlign: `center` }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <img src="404.gif" alt="gif">
    </div>
  </Layout>
)

export default NotFound
