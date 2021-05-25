/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,

  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `card-images`,
        path: `${__dirname}/src/images/card-images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `template-pages`,
        path: `${__dirname}/src/template-pages`
      }
    }
  ]
}
