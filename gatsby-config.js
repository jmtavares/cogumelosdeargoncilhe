module.exports = {
    siteMetadata: {
        title: `Cogumelos de Argoncilhe`,
        description: `Cogumelos de Argoncilhe`,
        author: `Jose Tavares`,
        siteUrl: `https://www.cogumelosdeargoncilhe.pt/`
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
                display: `fullscreen`
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [{ family: `Asap` }],
                display: "swap"
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA
            }
        },
        `gatsby-plugin-netlify`,
        `gatsby-plugin-emotion`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`
    ]
};
