import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'artistsGrid',
  title: 'Artists Grid',
  type: 'object',
  icon: ThListIcon,

  fields: [
    defineField({
      name: 'tag',
      type: 'reference',
      to: [{type: 'tag'}],
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'artistsCard',
          // type: 'reference',
          // to: [{type: 'artist'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: `tag.title.${baseLanguage}`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Artists Grid',
      }
    },
  },
})
