import { getExtension, getImageDimensions } from '@sanity/asset-utils';
import { RiImage2Line } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Image',
  name: 'imageWithAlt',
  type: 'image',
  icon: RiImage2Line,
  options: {
    hotspot: true
  },
  fields: [
    defineField({
      title: 'Alternative Text',
      name: 'alt',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required()
    }),
    defineField({
      title: 'Image Caption',
      name: 'caption',
      type: 'string'
    })
  ],
  validation: (rule) =>
    rule.custom((value) => {
      if (!value) {
        return true;
      }
      const filetype = getExtension(value.asset!._ref);
      if (filetype !== 'jpg' && filetype !== 'png' && filetype !== 'webp') {
        return 'Image must be a JPG or PNG or WEBP';
      }
      // const { width, height } = getImageDimensions(value.asset!._ref);
      // if (width < 700 || height < 400) {
      //   return 'Image must be at least 700x400 pixels';
      // }
      return true;
    })
});
