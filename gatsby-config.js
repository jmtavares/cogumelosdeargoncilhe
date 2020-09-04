module.exports = {
  siteMetadata: {
    title: `Cogumelos de Argoncilhe`,
    description: `Cogumelos de Argoncilhe`,
    author: `Jose Tavares`,
    siteUrl: `https://www.cogumelosdeargoncilhe.pt/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cogumelos de Argoncilhe`,
        short_name: `Cogumelos de Argoncilhe`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `fullscreen`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: `Nunito Sans`, variants: [`300`, `400`, `700`] },
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: false,
        publicPath: `admin`,
        htmlTitle: `Cogumelos de Argoncilhe - Admin`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    }
  ]
};
