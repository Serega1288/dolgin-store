import React from "react"
import Layout from "../components/global/layout";
import ProductItems from "../components/products-items";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import SEO from "../components/global/seo"

export default () => (
    <Layout page="home">
        <SEO title="Главная" />
        <Home />
        <div className="container mt-3">
            <NavBar />
            <ProductItems />
        </div>
    </Layout>
);
