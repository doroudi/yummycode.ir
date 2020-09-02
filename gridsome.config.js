// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const basicInfo = require('./basicInfo.json')
module.exports = {
  siteName: basicInfo.siteName,
  siteDescription: basicInfo.description,
  siteUrl: basicInfo.url,
  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: basicInfo.googleAnalyticsId
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        // exclude: ['/exclude-me'],
        config: {
          '/*': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2020-08-27',
          },
          // '/about': {
          //   changefreq: 'monthly',
          //   priority: 0.7,
          //   lastmod: '2020-05-12',
          // }
        }
      }
    },
    {
    use:  'gridsome-plugin-gitalk',
    options: {
      clientID:  'a160bf716c362389bc7b',
      clientSecret : '',
      repo: '',
      owner : 'doroudi',
    }
  },
  {
    use: "gridsome-plugin-brotli",
    options: {
      extensions: ["css", "html", "js", "svg", "json"],
    },
  },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
      ],
      options: {
          showLineNumbers: true
      }
    }
  }
}
