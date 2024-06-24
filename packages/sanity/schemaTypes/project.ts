import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Campagnes publicitaires', value: 'Campagnes publicitaires'},
          {title: 'Marketing de Contenu', value: 'Marketing de Contenu'},
          {title: 'Gestion des relations médias', value: 'Gestion des relations médias'},
          {title: 'Maquettes digitales', value: 'Maquettes digitales'},
          {title: 'Évènements médiatiques', value: 'Évènements médiatiques'},
          {title: 'Sponsoring et mécénats', value: 'Sponsoring et mécénats'},
        ],
      },
      validation: (Rule) => [Rule.required().error('Ce champ est obligatoire')],
    }),
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
      subtitle: 'summary',
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
