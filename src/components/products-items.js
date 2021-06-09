import React, {useEffect, useState} from "react";
import {graphql, Link, useStaticQuery} from 'gatsby';
import Product from "../components/products-item"
import {isEmpty} from 'lodash'

const ProductItems = () => {

    // console.log('props', catID);
    //
    // const cId = 'dGVybToxODc='




    const data = useStaticQuery(graphql` 
    {
                allWpProduct {
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
                        id
                        databaseId
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

    const count = 4

    // Array of all news articles
    const allProducts = data.allWpProduct.edges

    // localStorage.setItem('allWpProduct', data)

    // {localStorage.clear()}

    // State for the list
    const [list, setList] = useState([...allProducts.slice(0, count )])

    // State to trigger oad more
    const [loadMore, setLoadMore] = useState(false)

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(allProducts.length > count )

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more articles
    useEffect(() => {
        if (loadMore && hasMore) {
            const currentLength = list.length
            const isMore = currentLength < allProducts.length
            const nextResults = isMore
                ? allProducts.slice(currentLength, currentLength + count )
                : []
            setList([...list, ...nextResults])
            setLoadMore(false)
        }
    }, [loadMore, hasMore]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMore = list.length < allProducts.length
        setHasMore(isMore)
    }, [list]) //eslint-disable-line


    function colProduct(item) {
        if ( isEmpty(item) === false ) {
            //console.log('isEmpty', true);
            return 'row-cols-' + typeof window !== 'undefined' && (localStorage.getItem('colProduct'));
        } else {
            //console.log('isEmpty', false);
            typeof window !== 'undefined' && (localStorage.setItem('colProduct', '2'));
        }
        //console.log( 'isEmpty---', isEmpty(item) )
    }
    //const colItem = colProduct( localStorage.getItem('colProduct') );

    return (
        <div className={` row box-products row-cols-${ colProduct(  typeof window !== 'undefined' && ( localStorage.getItem('colProduct') ) ) } `}>
            {/*<pre>{JSON.stringify( localStorage.getItem('colProduct') , null, 4)}</pre>*/}

            {/*{localStorage.clear()}*/}

            {/*<div className="col-12">*/}
            {/*    <pre>{JSON.stringify(localStorage, null, 4)}</pre>*/}
            {/*</div>*/}

            {/*{console.log('colItem', colItem)}*/}

            {list.map((article, i ) => (
                <>
                    <Product col="" article={article.node} />
                </>
            ))}
            {hasMore ? (
                <div className="col-12 text-center mt-3">
                    <button className="btn style-2 max-w700" onClick={handleLoadMore}>показать еще</button>
                </div>
            ) : (
                <div className="col-12">
                    {/*<p>No more results</p>*/}
                </div>
            )}

        </div>
    )
}
export default ProductItems

