import {defineField} from 'sanity'
import {baseLanguage} from '../locale/supportedLanguages'

export default defineField({
  name: 'edition',
  title: 'Edition',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
    }),
    defineField({
      name: 'imageCover',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'isbn',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'jpg, 1400px de large, 72dpi',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'localeBlockContent',
    }),
    defineField({
      name: 'link',
      type: 'linkExternal',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage}`,
      media: 'imageCover',
    },
  },
})
