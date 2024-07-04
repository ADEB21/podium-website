import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Accueil',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'hero',
    //   title: 'Hero',
    //   type: 'hero',
    // }),
    defineField({
      name: 'ProjectsArray',
      title: 'Projets séléctionnés',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
      validation: (Rule) => [Rule.max(6).error("Doit contenir au maximum 6 projets")]
    }),
  ],
})
