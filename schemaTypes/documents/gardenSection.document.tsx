import { PiTree } from 'react-icons/pi'
import { defineField, defineType } from 'sanity'
import PlantSpotPreview from '../../components/previews/PlantSpotPreview'

export default defineType({
  name: 'gardenSection',
  title: 'Garden Section',
  type: 'document',
  icon: PiTree,

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
      type: 'portableText',
    }),

    defineField({
      name: `hotspots`,
      title: `Plant Spots`,
      type: `array`,
      of: [
        defineField({
          name: 'spot',
          title: 'Plant Spot',
          type: 'object',
          fieldsets: [
            { name: 'position', options: { columns: 2, collapsible: true, collapsed: true } },
          ],
          fields: [
            defineField({
              name: 'plant',
              title: 'Plant',
              type: 'reference',
              to: [{ type: 'plant' }],
              validation: (Rule) => Rule.required(),
            }),
            { name: 'details', title: 'Details', type: 'text', rows: 2 },
            {
              name: 'x',
              type: 'number',
              readOnly: true,
              fieldset: 'position',
              initialValue: 50,
              validation: (Rule) => Rule.required().min(0).max(100),
            },
            {
              name: 'y',
              type: 'number',
              readOnly: true,
              fieldset: 'position',
              initialValue: 50,
              validation: (Rule) => Rule.required().min(0).max(100),
            },
          ],
          preview: {
            select: {
              title: 'plant.name',
              subtitle: 'details',
            },
          },
        }),
      ],
      options: {
        imageHotspot: {
          imagePath: `image`,
          descriptionPath: `details`,
          tooltip: PlantSpotPreview,
        },
      },
      hidden: ({ parent }) => !parent?.image,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'plantImage',
      options: {
        hotspot: true,
        collapsible: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    // location
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image',
    },
  },
})
