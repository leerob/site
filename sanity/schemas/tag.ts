import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: { required: () => any }) => Rule.required()
    })
  ]
});
