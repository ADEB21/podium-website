import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Ce champ est obligatoire')],
    }),
    defineField({
      name: 'summary',
      title: 'Résumé',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Ce champ est obligatoire')],
    }),
    defineField({
      name: 'picture',
      title: 'Image',
      type: 'picture',
      validation: (Rule) => [Rule.required().error('Ce champ est obligatoire')],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: "summary",
      img: 'picture',
    },
    prepare({title, subtitle, img}) {
      return {
        title,
        subtitle,
        media: img,
      }
    },
  },
})
