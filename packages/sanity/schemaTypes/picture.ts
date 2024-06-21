import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'picture',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alternativeText',
      title: 'Texte alternatif',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Ce champ est obligatoire')],
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
