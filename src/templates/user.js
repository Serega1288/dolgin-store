import React from "react"
import Layout from "../components/global/layout";

export default ({pageContext}) => (
    <Layout page="user">
        <div className="container">
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        </div>
    </Layout>
);