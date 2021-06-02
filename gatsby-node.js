const path = require(`path`)
const slash = require(`slash`)
// Log out information after a build is done
// exports.onPostBuild = ({ reporter }) => {
//     reporter.info(`Your Gatsby site has been built!`)
// }
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query { 
      allWpPage {
        edges {
          node {
            slug
            title
            content
            isFrontPage
            template {
              templateName
            }
          }
        }
      }
      allWpProductCategory {
        edges {
          node {
            name
            slug
            id
            products {
              nodes {
                  id
                  name
                  sku
                  description
                  slug
                  reviewCount
                  attributes {
                    nodes {
                      name
                      options
                      visible
                    }
                  }
                  productCategories {
                    nodes {
                      name
                      slug
                      id
                    }
                  }
                  ... on WpVariableProduct {
                    price
                    variations {
                      nodes {
                         price
                         sku
                         stockQuantity 
                         attributes {
                            nodes {
                              value
                            }
                         }
                       }
                     }
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
              }
            }
          }
        }
      } 
      allWpProduct {
          edges {
            node {
              id
              databaseId
              name
              sku
              description
              slug
              reviewCount
              attributes {
                nodes {
                  name
                  options
                  visible
                }
              }
              productCategories {
                nodes {
                  name
                  slug
                  id
                }
              }
              ... on WpVariableProduct {
                price
                variations {
                  nodes {
                     id
                     databaseId
                     price
                     sku
                     stockQuantity 
                     attributes {
                        nodes {
                          value
                        }
                     }
                   }
                 }
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
              galleryImages {
                  nodes {
                    mediaDetails {
                      sizes {
                        name
                        sourceUrl
                      }
                    }
                  } 
              }
              reviews {
                    nodes {
                        content
                        date
                        author { 
                            node {
                            id
                            name
                            ... on WpUser {
                                    avatar {
                                        url
                                    }
                                    lastName
                                    firstName
                                }
                            }
                        }
                    }
              }
            }
          }
      }
    } 
  `)

    // reviews {
    //     node {
    //         content
    //         date
    //         author {
    //             node {
    //             ... on User {
    //                     avatar {
    //                         url
    //                     }
    //                     lastName
    //                     firstName
    //                 }
    //             }
    //         }
    //     }
    // }

    // // Check for any errors
    // if (result.errors) {
    //     throw new Error(result.errors)
    // }





    const { allWpPage, allWpProduct, allWpProductCategory } = result.data

    const pageTemplate = path.resolve(`./src/templates/page.js`)
    //const shopTemplate = path.resolve(`./src/templates/home.js`)
    const shopTemplate = path.resolve(`./src/page/index.js`)

    // We want to create a detailed page for each page node.
    // The path field contains the relative original WordPress link
    // and we use it for the slug to preserve url structure.
    // The Page ID is prefixed with 'PAGE_'
    allWpPage.edges.forEach(edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.

        console.log('-------------')
        console.log(edge.node.title , edge.node.template.templateName)
        console.log('-------------')


        // var template = shopTemplate
        // var pathUrl = `/${edge.node.slug}`

        if ( edge.node.isFrontPage === 'true' ) {

            var template = shopTemplate
            var pathUrl = `/${edge.node.slug}`

        } else {

            var pathUrl = `/${edge.node.slug}`
            if ( edge.node.template.templateName === 'Default') {
                var template = pageTemplate
            } else {
                var template = path.resolve(`./src/templates/` + edge.node.template.templateName.toLowerCase()  + `.js`)
            }

        }

        createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `apollo` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: pathUrl,
            component:  slash(template),
            context: edge.node,
        })
    })

    // We want to create a detailed page for each post node.
    // The path field stems from the original WordPress link
    // and we use it for the slug to preserve url structure.
    // The Post ID is prefixed with 'POST_'

    allWpProduct.edges.forEach(edge => {
        createPage({
            path: `/shop/${edge.node.productCategories.slug}/${edge.node.slug}`,
            component: slash(path.resolve(`./src/templates/product.js`)),
            context: edge.node,
        })

    })

    allWpProductCategory.edges.forEach(edge => {
        createPage({
            path: `/product-category/${edge.node.slug}`,
            component: slash(path.resolve(`./src/templates/category-product.js`)),
            context: edge.node,
        })
    })


}

// ck_e826ebd0428bf6adb2d0ef515347635f384f4085
// cs_1c0cc1567cac330c2eaa93013a73c37182e5e51b
