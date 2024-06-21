import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Le champ est obligatoire')],
    }),
    defineField({
      name: 'summary',
      title: 'Résumé',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Le champ est obligatoire')],
    }),
  ],
  preview: {
    select: {
      title: 'alternativeText',
      img: 'asset',
    },
    prepare({title, img}) {
      return {
        title: title,
        media: img,
      }
    },
  },
})
