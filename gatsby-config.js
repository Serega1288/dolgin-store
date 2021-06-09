module.exports = {
  // siteMetadata: {
  //   title: `Gatsby Default Starter`,
  //   description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  //   author: `@gatsbyjs`,
  // },
  siteMetadata: {
    title: "dolgih store",
    titleTemplate: "%s · dolgih store",
    description:
        "dolgih store description",
    author: `@gatsbyjs`,
    //url: "https://www.doe.com", // No trailing slash allowed!
    //image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    //twitterUsername: "@occlumency",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        //url: `http://gedsbysyte.local/graphql`,
        url: `https://base.dolgih.store/graphql`,
        //url: `https://dolgih.web-master24.com/wp-json/wp/v2/`,
        debug: {
          preview: true,
        },
        schema: {
          timeout: 2000000,

          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5

        },
        develop: {
          hardCacheMediaFiles: false,
        }
      },
    },
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://base.dolgih.store/graphql'
      }
    }
  ],
}
