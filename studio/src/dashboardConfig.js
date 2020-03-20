export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e744016381400aff0380bbc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-g1whpt57',
                  apiId: '0096feaa-ce91-47af-8251-2b98f91b297a'
                },
                {
                  buildHookId: '5e744016a2acd35ec041ad15',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r6bzyiou',
                  apiId: '2d4315cb-146a-4712-b178-c55fd1a09780'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bgpnd/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r6bzyiou.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
