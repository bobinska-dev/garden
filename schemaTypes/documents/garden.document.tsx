import { PiIsland } from 'react-icons/pi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'garden',
  title: 'Garden',
  type: 'document',
  icon: PiIsland,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    // sections
    defineField({
      name: 'sections',
      title: 'Garden Section',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'gardenSection' }] })],
    }),
    // location
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }),
  ],
})
