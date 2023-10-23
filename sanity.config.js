import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { colorInput } from '@sanity/color-input'
import { newTheme } from './theme'
import Logo from './components/logo'

export default defineConfig({
  name: 'default',
  title: 'itsforgotham',

  projectId: '7e395kwl',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo
    }
  },
  theme: newTheme
})
