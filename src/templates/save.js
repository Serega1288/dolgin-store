import React from "react"
import Layout from "../components/global/layout";
import GetSaveProduct from "../components/save/getSaveProduct";
import {graphql, Link, useStaticQuery} from 'gatsby';
import BoxMenu2 from "../components/cart/BoxMenu2"
import GetInfoResult from "../components/InfoBox"
import SEO from "../components/global/seo";

export default ({pageContext}) => {

    const data = useStaticQuery(graphql` 
    {
                allWpProduct { 
                  edges {
                    node {
                      id
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
    `)
    //localStorage.setItem('allWpProduct', data)

    const arrayOfKeys = Object.keys(  typeof window !== 'undefined' && (localStorage) );
    let name, result, array = [];
    {
        arrayOfKeys.forEach((el) => {
            name = el[0]+el[1]+el[2]+el[3]+el[4]+el[5]+el[6]+el[7]+el[8]+el[9]+el[10]
            if ( name == 'active-save' ) {
                result = el.replace('active-save[','').replace(']','');
                console.log( result );
                array.push( result )
            }
        })
        typeof window !== 'undefined' && localStorage.setItem('array-active-save', JSON.stringify(array) )
        console.log( array )
    }



    function get(ids) {
        if ( ids.length != 2 ) {
            const array = JSON.parse(ids)
            console.log('ids', array)
            return array
        } else {
            return ids
        }
    }

    return (
        <Layout page="save">

            <SEO title={pageContext.title} />

            <BoxMenu2 />

            <div className="container pt-1">
                {/*{localStorage.clear()}*/}

                {/*<pre>{ JSON.stringify(localStorage, null, 40)}</pre>*/}

                {/*{  localStorage.getItem('array-active-save')  }*/}

                <div className="row">
                    { typeof window !== 'undefined' &&

                            localStorage.getItem('array-active-save').length !== 2 ? (
                                data.allWpProduct.edges.map((article, i ) => (
                                    <> { get( localStorage.getItem('array-active-save') ).includes( article.node.id ) == true && ( <GetSaveProduct article={article.node} /> ) } </> ))
                            ) : (
                                <div className="col-12">
                                    <GetInfoResult info="save" title="Страница пустая" text="Пока нет сохраненых товаров" html="" classBox='h-100 ' homeBtn={true} />
                                </div>
                            )

                    }

                </div>

            </div>
        </Layout>
    );
}


