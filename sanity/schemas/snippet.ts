import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'snippet',
  type: 'document',
  title: 'Snippet',
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
        source: 'title'
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
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'iconTitle',
      title: 'Icon Title',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    })
  ]
});
