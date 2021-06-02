import React from "react"
import Layout from "../components/global/layout";
import ProductItems from "../components/products-items";

export default ({pageContext}) => (
    <Layout page={pageContext.page.template.templateName}>
        <div className="container">
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
            <ProductItems />
        </div>
    </Layout>
);