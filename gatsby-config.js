/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ssgenerator",
    description: "Nice and easy kenyan recipe site",
    author: "@Armstrong",
    person: { name: "Armstrong", age: 24 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "Armstrong", age: 24 },
      { name: "Juliet", age: 29 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sjxgw1xsgues`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "g_59IuxW7zC0ZO5M5BC-OSLuXbSam5d7g3n016z6RgY",
      },
    },
  ],
};
