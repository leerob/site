import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'markdown'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'imageWithAlt'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      // @ts-ignore
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'tag'
            }
          ]
        }
      ],
      validation: (Rule: { required: () => any }) => Rule.required()
    })
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage'
    }
  }
});
