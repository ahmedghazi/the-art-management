import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'artistsCard',
  title: 'Artists Card',
  type: 'object',
  icon: ThListIcon,

  fields: [
    defineField({
      name: 'artist',
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'title',
      type: 'localeString',
      hidden: true,
    }),

    defineField({
      name: 'media',
      type: 'array',
      of: [
        {
          type: 'figure',
        },
        {
          type: 'videoMux',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: `artist.name`,
      media: 'media.0.image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        subtitle: 'Artists Card',
        media: media,
      }
    },
  },
})
