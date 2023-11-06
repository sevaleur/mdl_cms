export default {
  name: 'advertising',
  type: 'document', 
  title: 'Advertising', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title', 
    },
    {
      name: 'showcase',
      type: 'array',
      title: 'Showcase',
      validation: Rule => Rule.min(1).unique(),
      of: [
        {
          name: 'link',
          type: 'reference',
          title: 'Project',
          to: [
            {
              type: 'advert'
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