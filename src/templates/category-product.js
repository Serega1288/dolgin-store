import React from "react"
import Layout from "../components/global/layout";
import CategoryProductItems from "../components/CategoryProductItems";
import {Link} from "gatsby";
import NavBar from "../components/NavBar";
import SEO from "../components/global/seo";

export default ({pageContext}) => (
    <Layout page="CategoryProduct">

        {/*{<pre>{JSON.stringify(pageContext, null, 4)}</pre>}*/}

        <SEO title={pageContext.name} />

        {/*{ pageContext.acf_banners.ifBanner === true &&*/}
        {/*<div className="banner">*/}
        {/*    <Link to={`${pageContext.acf_banners.linkUrl.url}`}>*/}
        {/*        <img src={pageContext.acf_banners.banner.sourceUrl} alt=""/>*/}
        {/*        <div className="container">*/}
        {/*            <div className="content-banner">*/}
        {/*                {pageContext.acf_banners.bannerTitle}*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </Link>*/}
        {/*</div>*/}
        {/*}*/}



        <div className="container mt-3">

            <NavBar />

            {/*<ProductItems catID={pageContext.id} />*/}

            <CategoryProductItems products={pageContext.products} />


        </div>

    </Layout>
);