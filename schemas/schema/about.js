export default {
  name: 'about',
  type: 'document', 
  title: 'About', 
  fields: [
    {
      name: 'header', 
      type: 'object', 
      title: 'Header', 
      fields: [  
        {
          name: 'title', 
          type: 'text', 
          title: 'Title',
          rows: 5
        }, 
        {
          name: 'image', 
          type: 'image', 
          title: 'Header image',
          fields: [
            {
              name: 'alt', 
              type: 'string', 
              title: 'Alternative text'
            }
          ]
        }
      ]
    },
    {
      name: 'background', 
      type: 'object', 
      title: 'Background', 
      fields: [
        {
          name: 'title', 
          type: 'string', 
          title: 'Title'
        },
        {
          name: 'description', 
          type: 'text', 
          title: 'Description'
        },
        {
          name: 'list', 
          type: 'array', 
          title: 'Skillset list',
          of: [
            {
              name: 'list_item', 
              type: 'string', 
              title: 'Skill'
            }
          ],
          options: {
            layout: 'list'
          }
        }
      ]
    },
    {
      name: 'selected_clients', 
      type: 'object', 
      title: 'Selected clients', 
      fields: [
        {
          name: 'title', 
          type: 'string', 
          title: 'Title'
        }, 
        {
          name: 'clients', 
          type: 'array', 
          title: 'Clients',
          of: [
            {
              name: 'client', 
              type: 'string', 
              title: 'Client'
            }
          ], 
          options: {
            layout: 'list'
          }
        }
      ]
    }, 
    {
      name: 'about_main', 
      type: 'object', 
      title: 'About section',
      fields: [
        {
          name: 'title', 
          type: 'string', 
          title: 'Title'
        }, 
        {
          name: 'description', 
          type: 'text', 
          title: 'Description',
        },
        {
          name: 'location', 
          type: 'string', 
          title: 'Location'
        }
      ]
    },
    {
      name: 'press', 
      type: 'object', 
      title: 'Press section', 
      fields: [
        {
          name: 'title', 
          type: 'string', 
          title: 'Title'
        }, 
        {
          name: 'links', 
          type: 'array', 
          title: 'Links', 
          of: [
            {
              name: 'link', 
              type: 'object', 
              title: 'Link', 
              fields: [
                {
                  name: 'name', 
                  type: 'string', 
                  title: 'Link name'
                }, 
                {
                  name: 'url', 
                  type: 'url', 
                  title: 'Url'
                }
              ]
            }
          ],
          options: {
            layout: 'list'
          }
        }
      ]
    },
    {
      name: 'contact', 
      type: 'object', 
      title: 'Contact section', 
      fields: [
        {
          name: 'title', 
          type: 'string', 
          title: 'Title'
        }, 
        {
          name: 'email', 
          type: 'string', 
          title: 'Email', 
          validation: Rule => Rule.required().email()
        }, 
        {
          name: 'icons', 
          type: 'array', 
          title: 'Icons', 
          of: [
            {
              name: 'icon', 
              type: 'image', 
              title: 'Image', 
              fields: [
                {
                  name: 'alt', 
                  type: 'string', 
                  title: 'Alternative text'
                }
              ]
            }
          ],
          options: {
            layout: 'grid'
          }
        }
      ]
    },
    {
      name: 'footer', 
      type: 'object', 
      title: 'Footer',
      fields: [
        {
          name: 'title', 
          type: 'string', 
          title: 'Title'
        }, 
        {
          name: 'image', 
          type: 'image', 
          title: 'Footer image'
        }
      ]
    }
  ]
}