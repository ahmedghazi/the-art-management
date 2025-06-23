import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'
import {baseLanguage} from '../../locale/supportedLanguages'

export default defineField({
  name: 'artistsGridUI',
  title: 'Artists Grid UI',
  type: 'object',
  icon: ThListIcon,

  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      description: 'internal',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'artistsGrid',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Artists Grid UI',
      }
    },
  },
})
