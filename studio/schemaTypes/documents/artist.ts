import {defineField, defineArrayMember, defineType} from 'sanity'
import modulesList from '../objects/modules/modulesList'
import {baseLanguage} from '../locale/supportedLanguages'
import {IoIosPerson} from 'react-icons/io'

export default defineType({
  type: 'document',
  name: 'artist',
  title: 'Artist',
  icon: IoIosPerson,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),

    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      group: 'editorial',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL basée sur le titre (sans espace ni caractère autre que a-z-0-9',
      options: {
        source: `name`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    }),

    defineField({
      name: 'tag',
      type: 'reference',
      to: [{type: 'tag'}],
      group: 'editorial',
    }),
    defineField({
      name: 'imageCover',
      type: 'image',
      title: 'Image cover',
      description: 'Visible on liste pages, project cards (largeur 1400px)',
      group: 'editorial',
    }),
    defineField({
      name: 'videoCover',
      type: 'videoMux',
      title: 'Video cover',
      description: 'Visible on liste pages, project cards (largeur 1400px)',
      group: 'editorial',
    }),

    defineField({
      name: 'text',
      title: 'Texte',
      type: 'localeBlockContent',
      group: 'editorial',
    }),

    defineField({
      name: 'editions',
      title: 'Editions',
      type: 'array',
      of: [{type: 'edition'}],
      group: 'editorial',
    }),

    defineField({
      name: 'projectsTagged',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      group: 'editorial',
    }),

    defineField({
      name: 'projects',
      title: 'Projets',
      // description: 'Projets',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      group: 'editorial',
    }),

    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'linkExternal'}],
      group: 'editorial',
    }),
  ],

  preview: {
    select: {
      name: `name`,
      slug: 'slug',
      image: 'imageCover',
    },
    prepare(selection) {
      const {name, slug, image} = selection
      // console.log(images)
      return {
        title: name,
        subtitle: `/artist/${slug.current}`,
        media: image,
      }
    },
  },
})
