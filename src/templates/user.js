import React from "react"
import Layout from "../components/global/layout";
import SEO from "../components/global/seo";

export default ({pageContext}) => (
    <Layout page="user">
        <SEO title={pageContext.title} />
        <div className="container">
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        </div>
    </Layout>
);