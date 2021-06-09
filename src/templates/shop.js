import React from "react"
import Layout from "../components/global/layout";
import ProductItems from "../components/products-items";
import SEO from "../components/global/seo";

export default ({pageContext}) => (
    <Layout page={pageContext.page.template.templateName}>
        <SEO title={pageContext.title} />
        <div className="container">
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
            <ProductItems />
        </div>
    </Layout>
);