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
        fonts: [{ family: `Nunito Sans`, variants: [`300`, `400`, `700`] }],
        display: "swap",
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images/uploads`,
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/receitas`,
        name: "blog",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `./src/components/cms/index.js`,
        enableIdentityWidget: false,
        publicPath: `admin`,
        htmlTitle: `Cogumelos de Argoncilhe - Admin`,
      },
    },
  ],
};
