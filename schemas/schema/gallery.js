export default {
    name: 'gallery',
    type: 'document', 
    title: 'Gallery',
    fields: [
        {
            name: 'slug', 
            type: 'slug', 
            title: 'Slug',
            description: 'Add a custom slug for the URL'
        },
        {
          name: 'title', 
          type: 'string', 
          title: 'Title/Client'
        },
        {
            name: 'project_description',
            type: 'text', 
            title: 'Project Description'
        },
        {
            name: 'preview',
            type: 'image', 
            title: 'Preview', 
            fields: [
                {
                    name: 'alt', 
                    type: 'string', 
                    title: 'Alternative text'
                }
            ]
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