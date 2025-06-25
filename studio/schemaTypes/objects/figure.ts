import {FiImage} from 'react-icons/fi'
import {baseLanguage} from '../locale/supportedLanguages'
import {defineField} from 'sanity'

export default defineField({
  name: 'figure',
  title: 'Figure',
  type: 'object',
  icon: FiImage,
  preview: {
    select: {
      media: 'image',
      title: `caption`,
      project: 'project.title.en',
    },
    prepare(selection) {
      const {media, title, project} = selection
      return {
        title: title ? title : project,
        media: media,
        subtitle: 'Figure',
      }
    },
  },
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'jpg, 2000px de large, 72dpi',
      options: {
        hotspot: true,
      },
      fields: [
        // {name: 'title', title: 'Title', type: 'string'},
        {name: 'alt', title: 'Alt Description', type: 'string'},
        // {name: 'attribution', title: 'Attribution', type: 'string'}
      ],
    }),
    defineField({
      name: 'imageMobile',
      type: 'image',
      title: 'Image Mobile',
      description: 'jpg, 1400px de large, 72dpi',
      options: {
        hotspot: true,
      },
      fields: [
        // {name: 'title', title: 'Title', type: 'string'},
        {name: 'alt', title: 'Alt Description', type: 'string'},
        // {name: 'attribution', title: 'Attribution', type: 'string'}
      ],
    }),
    defineField({
      name: 'project',
      title: 'project',
      type: 'reference',
      description: 'will replace the title in the project page',
      to: [{type: 'project'}],
    }),
  ],
})
