import {FiImage} from 'react-icons/fi'
import {defineField} from 'sanity'

export default defineField({
  name: 'figures',
  title: 'Figure(s)',
  type: 'object',
  icon: FiImage,

  fields: [
    defineField({
      name: 'items',
      type: 'array',
      title: 'Figure(s)',
      description: 'jpg, 1400px de large, 72dpi',
      of: [{type: 'figure'}],
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      media: 'items.0.image',
      title: `caption`,
    },
    prepare(selection) {
      const {media, title} = selection
      return {
        title: title,
        media: media,
        subtitle: 'Figure(s)',
      }
    },
  },
})
