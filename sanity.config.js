import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'

import { newTheme } from './theme'

import Logo from './components/logo'
import ToolBar from './components/toolbar'

import { structure } from './layout/structure'

export default defineConfig({
  name: 'itsforgotham',
  title: 'itsforgotham',

  projectId: '7e395kwl',
  dataset: 'production',
  basePath: '/admin',
  plugins: [
    deskTool(
      { 
        structure 
      }
    ), 
    visionTool(),
    media()
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo, 
      toolMenu: ToolBar
    }
  },
  theme: newTheme
})
