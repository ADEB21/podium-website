import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projets',
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
    }),
  ],
})
