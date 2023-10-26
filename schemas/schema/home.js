export default {
  name: 'home',
  type: 'document', 
  title: 'Home', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title'
    }, 
    {
      name: 'logo', 
      type: 'image', 
      title: 'Logo', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }
      ]
    },
    {
      name: 'showcase',
      type: 'array',
      title: 'Showcase',
      of: [
        {
          name: 'link',
          type: 'reference',
          title: 'Showcase link',
          to: [
            {
              type: 'gallery'
            },
            {
              type: 'advert'
            }, 
            {
              type: 'film'
            }
          ]
        },
      ],
      options: {
        layout: 'list',
      },
    },
  ]
}