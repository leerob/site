import {
  RiBallPenFill,
  RiExternalLinkLine,
  RiLinksLine,
  RiSeparator,
  RiSuperscript2
} from 'react-icons/ri';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // @ts-ignore
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Highlight', value: 'highlight', icon: RiBallPenFill },
          { title: 'Superscript', value: 'superscript', icon: RiSuperscript2 }
        ],
        annotations: [
          {
            name: 'externalLink',
            type: 'object',
            title: 'External/Internal link.',
            icon: RiExternalLinkLine,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                name: 'title',
                type: 'string',
                title: 'Title'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            icon: RiLinksLine,
            title: 'Link to Post/Snippet)',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'post' }, { type: 'snippet' }]
              }
            ]
          }
        ]
      }
    }),
    defineArrayMember({
      type: 'imageWithAlt'
    }),
    defineArrayMember({
      name: 'break',
      type: 'object',
      title: 'Divider',
      icon: RiSeparator,
      // @ts-ignore
      fields: [
        defineField({
          name: 'break',
          type: 'boolean'
        })
      ]
    })
  ]
});
