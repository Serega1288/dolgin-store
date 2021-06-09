import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"

const Home = () => {
    const data = useStaticQuery(graphql`
    {
      wpPage(isFrontPage: {eq: true}) {
                isFrontPage
      }
    }
  `)



    return (
        <>
            <div className="banner">
                {/*<Link to={`${data.wpPage.acf_banners.linkUrl.url}`}>*/}
                {/*    <img src={data.wpPage.acf_banners.banner.sourceUrl} alt=""/>*/}
                {/*    <div className="container">*/}
                {/*        <div className="content-banner">*/}
                {/*            {data.wpPage.acf_banners.bannerTitle}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}
            </div>
        </>
    )
}

export default Home