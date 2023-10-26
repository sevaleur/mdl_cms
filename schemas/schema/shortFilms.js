export default {
  name: 'shortFilms',
  type: 'document', 
  title: 'Short Films', 
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