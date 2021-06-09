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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-XJ359PGP9Z",
        // // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Defers execution of google analytics script after page load
        // defer: false,
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
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
