export default {
  name: 'film', 
  type: 'document', 
  title: 'Film', 
  fields: [
    {
      name: 'slug', 
      type: 'slug', 
      title: 'Slug', 
      description: 'Add a custom slug for the URL'
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
      name: 'project',
      type: 'object', 
      title: 'Project info', 
      fields: [
        {
          name: 'client', 
          type: 'string', 
          title: 'Client'
        },
        {
          name: 'title', 
          type: 'string', 
          title: 'Title'
        }, 
        {
          name: 'role', 
          type: 'string', 
          title: 'Role'
        }, 
        {
          name: 'description', 
          type: 'text', 
          title: 'Project description'
        }
      ]
    }
  ]
}