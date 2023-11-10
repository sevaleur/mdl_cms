export default {
  name: 'home',
  type: 'document', 
  title: 'Home', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Page title'
    },
    {
      name: 'name', 
      type: 'string', 
      title: 'Name',
      description: 'can be seen in bottom left corner'
    },
    {
      name: 'showcase_title', 
      type: 'string', 
      title: 'Showcase title',
      description: 'can be seen vertical along the showcase'
    },
    {
      name: 'showcase',
      type: 'array',
      title: 'Showcase',
      validation: Rule => Rule.min(1).max(3).unique(),
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