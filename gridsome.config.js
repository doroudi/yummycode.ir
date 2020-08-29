// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'YummyCode',
  siteDescription: 'جایی برای به اشتراک گذاری تجربیاتم در حوزه برنامه نویسی وب ، دات نت و موبایل. سی شارپ ، جاوا اسکریپت ، تایپ اسکریپت و پایتون',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: 'gridsome-plugin-disqus'
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-176144150-1'
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
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
    }
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
