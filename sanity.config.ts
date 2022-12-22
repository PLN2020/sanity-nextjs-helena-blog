import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import { getDefaultDocumentNode } from './src/deskStructure'

export default defineConfig({
    basePath: '/studio',
    name: 'Helena_Content_Studio',
    title: "Helena's Content Studio",

    projectId: '1y03cnqr',
    dataset: 'production',

    plugins: [deskTool({
        defaultDocumentNode: getDefaultDocumentNode
    }), visionTool()],

    schema: {
        types: schemaTypes,
    },
    studio: {
        components: {
            // logo: Logo,
            navbar: StudioNavbar,
        }
    },
    theme: myTheme
})

