import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export default defineField({
  name: 'productionsUI',
  title: 'Productions UI',
  type: 'object',
  description: 'in artists page',
  icon: ThListIcon,

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Internal title (displayed only in the admin)',
    }),
    defineField({
      name: 'text',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'featured',
      type: 'productionItem',
      title: 'Featured Production',
      description: 'Select a featured production item',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'productionItem',
        },
      ],
    }),
    defineField({
      name: 'footer',
      type: 'localeBlockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Productions UI',
      }
    },
  },
})
