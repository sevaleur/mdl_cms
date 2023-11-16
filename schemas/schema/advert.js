export default {
  name: 'advert', 
  type: 'document', 
  title: 'Advert', 
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
      title: 'Title'
    }, 
    {
      name: 'preview', 
      type: 'image', 
      title: 'Preview image',
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }
      ]
    },
    {
      name: 'selected_video', 
      type: 'url',
      title: 'Video url'
    },
    {
      name: 'uploaded_video',
      type: 'file', 
      title: 'Upload video'
    },
    {
      name: 'project',
      type: 'object', 
      title: 'Project info', 
      fields: [
        {
          name: 'client_title', 
          type: 'string', 
          title: 'Client/Agency title',
          validation: Rule => Rule.required()
        },
        {
          name: 'client', 
          type: 'string', 
          title: 'Client/Agency name',
          validation: Rule => Rule.required().max(26)
        },
        {
          name: 'role', 
          type: 'text', 
          title: 'Role',
          validation: Rule => Rule.required()
        }, 
        {
          name: 'year', 
          type: 'string', 
          title: 'Year of production',
          validation: Rule => Rule.required()
        },
        {
          name: 'description', 
          type: 'text', 
          title: 'Project description',
          validation: Rule => Rule.required()
        },
      ]
    },
    {
      name: 'inDepth', 
      type: 'object',
      title: 'In depth project description (Optional)',
      fields: [
        {
          name: 'photo', 
          type: 'image', 
          title: 'BTS image',
          fields: [
            {
              name: 'alt', 
              type: 'string', 
              title: 'Alternative text',
              description: 'Displayed alongside the picture'
            }
          ]
        },
        {
          name: 'description', 
          type: 'text', 
          title: 'In depth description',
        },
        {
          name: 'photoTwo', 
          type: 'image', 
          title: 'BTS image',
          fields: [
            {
              name: 'alt', 
              type: 'string', 
              title: 'Alternative text',
              description: 'Displayed alongside the picture'
            }
          ]
        },
        {
          name: 'descriptionTwo', 
          type: 'text', 
          title: 'In depth description',
        }
      ]
    },
    {
      name: 'footer', 
      type: 'object', 
      title: 'Credits etc. (Optional)',
      fields: [
        {
          name: 'credits_title', 
          type: 'string', 
          title: 'Credits title'
        }, 
        {
          name: 'credits', 
          type: 'text', 
          title: 'Credits'
        },
        {
          name: 'thanks_title', 
          type: 'string', 
          title: 'Special Thanks title'
        }, 
        {
          name: 'thanks', 
          type: 'text', 
          title: 'People that made it possible'
        },
      ]
    }
  ]
}