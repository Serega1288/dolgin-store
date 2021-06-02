import React from "react"
import Layout from "../components/global/layout";
import ProductItems from "../components/products-items";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

export default () => (
    <Layout page="home">
        <Home />
        <div className="container mt-3">
            <NavBar />
            <ProductItems />
        </div>
    </Layout>
);
