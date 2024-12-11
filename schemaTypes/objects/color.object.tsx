import { defineType } from 'sanity'

export default defineType({
  name: 'plant-color',
  title: 'Color',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Color Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    // pallette array of color items
    {
      name: 'palette',
      title: 'Palette',
      type: 'array',
      of: [
        {
          type: 'color',
        },
      ],
    },
  ],
})
