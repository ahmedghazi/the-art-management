import {defineType, defineArrayMember} from 'sanity'
// import { FiExternalLink, LinkIcon } from 'react-icons/fi'
import {LinkIcon} from '@sanity/icons'
import {FiExternalLink} from 'react-icons/fi'
import linkIntternalTypes from '../misc/linkIntternalTypes'
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
const TextNormal = (props: any) => (
  <span style={{fontSize: '1rem', fontFamily: 'serif'}}> {props.children} </span>
)
const TextL = (props: any) => (
  <span style={{fontSize: '2rem', marginTop: 0}}> {props.children} </span>
)

const TextSans = (props: any) => <span style={{fontFamily: 'sans-serif'}}>{props.children}</span>

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},

        {
          title: 'Texte L',
          value: 'text-lg',
          component: TextL,
        },

        // {
        //   title: "Texte indenté",
        //   value: "text-index",
        //   component: TextIndent,
        // },
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          // {title: 'Sans serif', value: 'sans', component: TextSans},
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          // {
          //   title: "Underline",
          //   value: "u",
          //   icon: () => "u",
          //   component: Underline,
          // },
          // {
          //   title: "Outline",
          //   value: "outline",
          //   icon: () => "o",
          //   component: Outline,
          // },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal link',
            name: 'linkInternal',
            type: 'object',
            icon: LinkIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                weak: true,
                title: 'Reference',
                to: linkIntternalTypes,
              },
            ],
          },
          {
            title: 'External link',
            name: 'linkExternal',
            type: 'object',
            icon: FiExternalLink,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.

    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),

    // defineArrayMember({
    //   type: "embed",
    // }),
  ],
})
