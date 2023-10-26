export default {
  name: 'commercial',
  type: 'document', 
  title: 'Commercial', 
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
              type: 'gallery'
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