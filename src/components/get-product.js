import React from "react";
import {graphql, StaticQuery} from 'gatsby';
import Product from "../components/products-item"



// const MyImg = function (props) {
  //   function hackTheQuery(src) {
  //       return `
  //     query {
  //     file(relativePath: { eq: "${src}" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `
  //   }


    // https://spectrum.chat/gatsby-js/general/using-variables-in-a-staticquery~abee4d1d-6bc4-4202-afb2-38326d91bd05
const GetProduct = ({ids}) => {


    return (
        <StaticQuery
            variabls={""}
            query={graphql`
              {
                allWpProduct(filter: {id: {in: ["cHJvZHVjdDoyOA==" , "cHJvZHVjdDoyMTU="] }}) { 
                  edges {
                    node {
                      id
                      databaseId
                      name
                      sku
                      onSale
                      productCategories {
                        nodes {
                          name
                          slug
                          id
                        }
                      }
                      ... on WpVariableProduct {
                        price
                        salePrice
                        name
                        id
                        databaseId
                      }
                      image {
                        mediaDetails {
                          sizes {
                            sourceUrl
                            name
                          }
                        }
                        mediaItemUrl
                      }
                      slug
                    }
                  }
                }
              }
          `}  render={ props => props.allWpProduct.edges.map(productItem => (
                <Product col="col-6" article={productItem.node} />
        ))} />
    )
}

export default GetProduct;

