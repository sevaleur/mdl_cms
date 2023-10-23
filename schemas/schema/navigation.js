export default {
  name: 'navigation', 
  type: 'document', 
  title: 'Navigation', 
  fields: [
    {
      name: 'logo', 
      type: 'image', 
      title: 'Logo', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }
      ]
    }, 
    {
      name: 'nav_items', 
      type: 'array', 
      title: 'Navigation menu',
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'title', 
              type: 'string', 
              title: 'Link title' 
            },
            {
              name: 'link', 
              type: 'reference',
              title: 'Link', 
              to: [ 
                { 
                  type: 'gallery' 
                } 
              ]
            }
          ]
        }
      ]
    }
  ]
}