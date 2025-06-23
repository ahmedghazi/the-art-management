import {defineField} from 'sanity'

export default defineField({
  name: 'editionsUI',
  title: 'Editions UI',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
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
      of: [{type: 'figure'}],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'localeBlockContent',
    }),
  ],
})
