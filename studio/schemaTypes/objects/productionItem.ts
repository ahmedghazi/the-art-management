import {defineField, defineType} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'
import {TfiLayoutMediaLeftAlt} from 'react-icons/tfi'

export default defineType({
  type: 'object',
  name: 'productionItem',
  title: 'Production Item',
  icon: TfiLayoutMediaLeftAlt,

  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      title: 'Title',
    }),
    defineField({
      name: 'subtitle',
      type: 'localeString',
      title: 'Subtitle',
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],

  preview: {
    select: {
      title: `title.${baseLanguage}`,
      subtitle: `subtitle.${baseLanguage}`,
      image: 'image',
    },
    prepare(selection) {
      const {title, subtitle, image} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: image,
      }
    },
  },
})
