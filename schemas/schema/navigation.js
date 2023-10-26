export default {
  name: 'navigation', 
  type: 'document', 
  title: 'Navigation', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title'
    }, 
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
          type: 'reference',
          title: 'Link', 
          to: [ 
            { 
              type: 'advertising' 
            },
            { 
              type: 'shortFilms' 
            }, 
            { 
              type: 'commercial' 
            },
            { 
              type: 'portraits' 
            },
            { 
              type: 'stillLife' 
            },
            { 
              type: 'about' 
            } 
          ]
        }
      ] 
    }
  ]
}