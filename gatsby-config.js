module.exports = {
  siteMetadata: {
    title: `Rossouw Oosthuizen`,
    description: `Rossouw Oosthuizen is a Graphic Designer.`,
    author: `marisayum.com`,
    keywords: `rossouw oosthuizen, design portfolio, graphic design`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
