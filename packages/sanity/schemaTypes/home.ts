import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
  ],
})
