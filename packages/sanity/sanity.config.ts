import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {HomeIcon, ClipboardIcon, PackageIcon} from '@sanity/icons'
import Logo from "./components/Logo.jsx"

export default defineConfig({
  name: 'default',
  title: 'Podium',
  icon: Logo,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.SANITY_STUDIO_DATASET as string,

  plugins: [
    structureTool(
      {
      structure: (S, context) => {
        return S.list()
          .title('Pages')
          .items([
            S.documentTypeListItem('home')
              .child(() =>
                S.document()
                  .title('Accueil')
                  .documentId('879135f5-0ca6-4f84-8446-a11f8bf6e247')
                  .schemaType('home')
                  .views([S.view.form()]),
              )
              .icon(HomeIcon),
            S.documentTypeListItem('projects')
              .child(() =>
                S.document()
                  .title('Projets')
                  .documentId('e0692267-df39-44a8-83e6-acs68a094a52')
                  .schemaType('projects')
                  .views([S.view.form()]),
              )
              .icon(HomeIcon),
            S.divider(),
            S.documentTypeListItem('project').title('Liste des projets').icon(PackageIcon),
          ])
      },
    }
  ),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
