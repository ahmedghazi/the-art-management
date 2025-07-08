import {FiPlay} from 'react-icons/fi'
import {defineField} from 'sanity'

export default {
  title: 'Video Mux',
  name: 'videoMux',
  type: 'object',
  icon: FiPlay,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'withAudio',
      type: 'boolean',
      title: "Avec de l'audio",
      description: "Avec de l'audio = avec les boutons play/pause, mute",
    }),
    defineField({
      name: 'placeholder',
      type: 'image',
      description: 'Image placeholder',
      validation: (Rule) => Rule.required().warning('Image placeholder est obligatoire'),
    }),
    defineField({
      name: 'videoDesktop',
      type: 'mux.video',
    }),
    defineField({
      name: 'videoMobile',
      type: 'mux.video',
    }),
    defineField({
      name: 'project',
      title: 'project',
      type: 'reference',
      description: 'will replace the title in the project page',
      to: [{type: 'project'}],
      hidden: ({document, parent, value}) => {
        console.log(document)
        console.log(parent)
        return document?._type !== 'project'
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'placeholder',
    },
    // component: VideoPreview,
    prepare(selection: any) {
      console.log(selection)
      const {media, title} = selection
      return {
        title: title,
        media: media,
        subtitle: 'Video Mux',
      }
    },
  },
}
