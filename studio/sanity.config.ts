import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {presentationTool} from 'sanity/presentation'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {structure} from './src/deskStructure'
import {muxInput} from 'sanity-plugin-mux-input'
import {linkResolverPreview} from './src/linkResolverPreview'

const devOnlyPlugins = [getStartedPlugin()]

const remoteURL = 'https://the-art-management-preprod.vercel.app'
const localURL = 'http://localhost:3000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export default defineConfig({
  name: 'default',
  title: 'Backoffice The Art Management',

  projectId: 'f3z0rdis',
  dataset: 'production',

  // plugins: [structureTool(), visionTool()],
  plugins: [
    structureTool({structure}),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
    media(),
    muxInput(),
    presentationTool({
      resolve: linkResolverPreview,
      previewUrl: {
        origin: previewURL,
        previewMode: {
          enable: '/api/preview',
          disable: '/api/exit-preview',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
