// this is to emulate the netlify-server functions
const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    flags: {
        QUERY_ON_DEMAND: true,
        LMDB_STORE: false,
        PARALLEL_QUERY_RUNNING: false,
    },
    pathPrefix: `/`,
    siteMetadata: {
        title: "Marilyn's Windows & Interiors",
        titleTemplate: `MWI`,
        description: `Marilyn’s Windows & Interiors custom designs exquisitely handcrafted window dressings into masterpieces to be admired and loved.`,
        author: `@ryanpilar`,
        twitterUsername: `@_ryanpilar_`,
        image: "landing.png",
        // ** ATTN ** What are the next three entries?
        siteUrl: "https://www.marilynswindows.com",
        canonical: "https://www.marilynswindows.com",
        getform: "https://getform.io/f/bdd66e45-0636-45e4-89fa-d54f9c9de14e",
        // getform:
        //     "https://api.getform.io/v1/forms/bdd66e45-0636-45e4-89fa-d54f9c9de14e?token=0bDt6l9MSTcxCq4YcocrPAqRNF7B9P2OQJDQIcvBGVjAwqBBtjN8u0AF6c98",
        copyright:
            // ** ATTN ** update link
            "MWI. <a href='https://example.com/' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
        siteLanguage: "en",
        socials: [
            {
                id: 1,
                icon: "fab fa-facebook-f",
                link: "https://www.facebook.com/MarilynsWindows/",
                title: "Facebook",
            },
            {
                id: 2,
                icon: "fab fa-twitter",
                link: "https://twitter.com/marilynswindows",
                title: "Twitter",
            },
            {
                id: 3,
                icon: "fab fa-instagram",
                link: "https://www.instagram.com/marilynwindowsandinteriors/",
                title: "Instagram",
            },
            {
                id: 4,
                icon: "fab fa-linkedin",
                link: "https://www.linkedin.com/in/marilynswindows/",
                title: "Linkedin",
            },
        ],
        contact: {
            phone: "905.878.0626",
            address: "468 Valleyview Cr. Milton, Ontario L9T 3L2",
            email: "marilyn@marilynswindows.com",
            website: "www.marilynswindows.com",
            rating: "4.9",
            customers: "700",
            clients: "3200",
        },
    },
    // mapping: {
    // 	"MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
    // },
    // jsxRuntime: "automatic",
    plugins: [
        `gatsby-plugin-netlify`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // `gatsby-plugin-styled-components`,
        "gatsby-transformer-json",
        // "gatsby-plugin-preload-fonts",
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                excerpt_separator: `<!-- endexcerpt -->`,
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fonts`,
                path: `${__dirname}/src/assets/fonts`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Mitech",
                short_name: "mitech",
                theme_color: "#086ad8",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
                icons: [
                    {
                        src: "/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                useAutoGen: true,
                autoGenHomeLabel: `Home`,
                exclude: [`/dev-404-page`, `/404`, `/404.html`],
                useClassNames: true,
            },
        },
        "gatsby-plugin-offline",
    ],

    // for avoiding CORS while developing Netlify Functions locally
    // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
    developMiddleware: (app) => {
        app.use(
            "/.netlify/functions/",
            createProxyMiddleware({
                target: "http://localhost:9000",
                pathRewrite: {
                    "/.netlify/functions/": "",
                },
            })
        );
    },
    // ...
};
