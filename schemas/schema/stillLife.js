export default {
  name: 'stillLife',
  type: 'document', 
  title: 'Still Life',
  fields: [
      {
        name: 'title', 
        type: 'string', 
        title: 'Title'
      },
      {
          name: 'project_description',
          type: 'text', 
          title: 'Project Description'
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: false,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                validation: Rule => Rule.required()
              },
            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
      {
        name: 'back', 
        type: 'string', 
        title: 'Back button text'
      },
      {
        name: 'close', 
        type: 'string', 
        title: 'Close button text',
        description: 'Displayed when picture is enlarged.'
      }
  ]
}