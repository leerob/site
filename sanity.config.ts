import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { markdownSchema } from 'sanity-plugin-markdown';

export default createConfig({
  name: 'default',
  title: 'svirins',
  projectId: 'ipfftpbg',
  dataset: 'development',
  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Post',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            },
            validation: (Rule) => Rule.required()
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown'
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image'
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
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
            validation: (Rule) => Rule.required()
          }
        ]
      },
      {
        name: 'snippet',
        type: 'document',
        title: 'Snippet',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            },
            validation: (Rule) => Rule.required()
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'iconTitle',
            title: 'Icon Title',
            type: 'string',
            validation: (Rule) => Rule.required()
          }
        ]
      },
      {
        name: 'tag',
        type: 'document',
        title: 'Tag',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required()
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            },
            validation: (Rule) => Rule.required()
          }
        ]
      }
    ]
  }
});
