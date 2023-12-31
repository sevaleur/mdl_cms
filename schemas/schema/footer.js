export default {
  name: 'footer', 
  type: 'document', 
  title: 'Footer', 
  fields: [
    {
      name: 'connect', 
      type: 'string', 
      title: 'Connect'
    }, 
    {
      name: 'expand', 
      type: 'string', 
      title: 'Expand'
    }, 
    {
      name: 'close', 
      type: 'string', 
      title: 'Close'
    }, 
    {
      name: 'email_icon', 
      type: 'image', 
      title: 'Email icon', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }, 
        {
          name: 'email', 
          type: 'string', 
          title: 'Email adress',
          validation: Rule => Rule.required().email()
        }
      ]
    },
    {
      name: 'top_links', 
      type: 'array', 
      title: 'Links in top row', 
      of: [
        {
          name: 'link_icon', 
          type: 'image', 
          title: 'Link icon', 
          fields: [
            {
              name: 'alt', 
              type: 'string', 
              title: 'Alternative text'
            },
            {
              name: 'url', 
              type: 'url', 
              title: 'Link'
            }
          ]
        }
      ],
      options: {
        layout: 'grid',
      }
    }, 
    {
      name: 'btm_links', 
      type: 'array', 
      title: 'Links in bottom row', 
      of: [
        {
          name: 'link_icon', 
          type: 'image', 
          title: 'Link icon', 
          fields: [
            {
              name: 'alt', 
              type: 'string', 
              title: 'Alternative text'
            },
            {
              name: 'url', 
              type: 'url', 
              title: 'Link'
            }
          ]
        }
      ],
      options: {
        layout: 'grid',
      }
    }
  ]
}