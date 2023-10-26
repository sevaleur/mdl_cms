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