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
      name: 'name', 
      type: 'string', 
      title: 'Name',
      description: 'Shown in bottom left corner'
    },
    {
      name: 'showcase',
      type: 'array',
      title: 'Showcase',
      validation: Rule => Rule.min(1).max(5).unique(),
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