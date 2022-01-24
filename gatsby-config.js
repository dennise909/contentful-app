require('dotenv').config();

module.exports = {
  siteMetadata: {
      title: `Contentful App`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Daniela is ready to put Gatsby in her CV",
    image: 'https://images.unsplash.com/photo-1558868540-3b5e8ca26dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
  },
  plugins: ['gatsby-plugin-react-helmet',
    
        {
            resolve:`gatsby-source-filesystem`,
            options:{
                name:`images`,
                path:`${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `y4zt3jqibesz`,
              accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
              host: `preview.contentful.com`,
            },
          },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ],
};