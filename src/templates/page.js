import React from "react"
import Layout from "../components/global/layout";

export default ({pageContext}) => (
    <Layout page={pageContext.template.templateName}>
      <div className="container">

          <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
          <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
      </div>
  </Layout>
);