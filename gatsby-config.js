module.exports = {
  siteMetadata: {
    title: `Dean Merchant`,
    author: `Dean Merchant`,
    description: 'Personal blog by Dean Merchant.',
    siteUrl: 'https://deanmerchant.com',
    githubUrl: 'https://github.com/Dean177/deanmerchant.com',
    social: {
      github: 'Dean177',
      instagram: 'merchant_dean',
      twitter: `@Dean177`,
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://d02cf59486a94042b84d1339306341e5@sentry.io/2461808',
        environment: process.env.NODE_ENV,
        enabled: ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-11024491-2`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dean Merchant`,
        short_name: `Dean Merchant`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#255F85`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-catch-links`,
  ],
};
