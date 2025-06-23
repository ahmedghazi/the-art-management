import {defineField} from 'sanity'
import {ThListIcon} from '@sanity/icons'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'projectFeatured',
  title: 'Project Featured',
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
    }),
    defineField({
      name: 'media',
      type: 'array',
      of: [
        {
          type: 'figure',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: `artist.name`,
      subtitle: `title.${baseLanguage}`,
      media: 'media.0.image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      }
    },
  },
})
