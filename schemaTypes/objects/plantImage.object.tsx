import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'plantImage',
  title: 'Plant Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
  options: {
    aiAssist: {
      imageDescriptionField: 'alt',
    },
  },
})
