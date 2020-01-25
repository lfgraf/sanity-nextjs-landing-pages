export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e2c1c39e3ba015e243b1ebc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fvvqpcu4',
                  apiId: 'a2f8e048-0364-4868-97a4-59509dbaa289'
                },
                {
                  buildHookId: '5e2c1c39050bb336443d251b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s6zb6vz8',
                  apiId: 'f96a9fc4-68fa-4c0a-8089-21aec608acea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raffaelevitale/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s6zb6vz8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
