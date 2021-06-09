import React from "react"
import Layout from "../components/global/layout";
import SEO from "../components/global/seo";
import {gql, useQuery} from "@apollo/client";






const Page = () => {

    const id = 2131;
    const GET = gql`
        query MyQuery {
          product(id: "${id}", idType: DATABASE_ID) {
            id
            name
          }
        }
    `;

    const { loading, error, data } = useQuery(GET);

    if (loading) return '..Загрузка';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            {data.product.name}
        </>
    );
}
export default Page
//
// export default ({pageContext}) => (
//     <Layout page="search">
//         <SEO title={pageContext.title} />
//         <div className="container">
//             <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
//         </div>
//     </Layout>
// );