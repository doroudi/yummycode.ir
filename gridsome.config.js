module.exports = {
  siteName: "YummyCode",
  siteDescription: "Daily posts about web development",

  templates: {
    WordPressCategory: "/category/:slug", // adds a route for the "category" post type (Optional)
    WordPressPost: "/:year/:month/:day/:slug", // adds a route for the "post" post type (Optional)
    WordPressPostTag: "/tag/:slug", // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "http://localhost:10012/", //process.env.WORDPRESS_URL, // required
        typeName: "WordPress", // GraphQL schema name (Optional)
      },
    },
  ],
};
