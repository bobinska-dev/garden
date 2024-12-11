import { PiPlant } from 'react-icons/pi'
import { defineField, defineType } from 'sanity'
import { Value } from 'sanity-plugin-internationalized-array'
import { getLocaleMonthsOptionsList } from '../../constants/months'
export default defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  icon: PiPlant,
  fields: [
    defineField({
      name: 'commonName',
      title: 'Common Name',
      type: 'internationalizedArrayString',
      validation: (Rule) =>
        Rule.custom((value: Value[]) => {
          if (!value)
            return {
              message: 'Common name is required',
              path: [{ _key: 'de' }, 'value'],
            }
          const deIndex = value.findIndex((v) => v._key === 'de')

          if (!value[deIndex].value) {
            return {
              message: 'German common name is required',
              path: [{ _key: 'de' }, 'value'],
            }
          }
          return true
        }).error({
          'de-DE': 'Deutscher Name muss angegeben sein.',
          //'fr-FR': '',
        }),
      group: 'info',
    }),
    defineField({
      name: 'scientific_name',
      title: 'Botanical Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: ['info', 'taxonomy'],
    }),
    // description (portable text)
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableText',
      group: 'info',
    }),

    // main image
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'plantImage',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: ['images', 'info'],
    }),
    // images
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'plantImage' }],
      options: {
        layout: 'grid',
      },
      group: ['images', 'info'],
    }),
    // slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'botanicalName',
      },
      validation: (Rule) => Rule.required(),
    }),
    // edible part
    defineField({
      name: 'ediblePart',
      title: 'Edible Part',
      type: 'string',
      options: {
        list: ['root', 'stem', 'leaf', 'flower', 'fruit', 'seed'],
      },
      group: ['info', 'taxonomy'],
      hidden: ({ document }) => !document?.edible,
    }),
    // edible
    defineField({
      name: 'edible',
      title: 'Edible',
      type: 'boolean',
      group: ['info', 'taxonomy'],
    }),
    // flower object with color array
    defineField({
      name: 'flower',
      title: 'Flower',
      type: 'object',
      fields: [
        defineField({
          name: 'colors',
          title: 'Colors',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'plant-color' }] }],
        }),
      ],
      group: ['info'],
    }),
    // foliage object with texture (fine, medium, and coarse), retention (boolean), and color array (plant-color references)
    defineField({
      name: 'foliage',
      title: 'Foliage',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'texture',
          title: 'Texture',
          type: 'string',
          options: {
            list: ['fine', 'medium', 'coarse'],
          },
        }),
        defineField({
          name: 'retention',
          title: 'Evergreen',
          type: 'boolean',
        }),
        defineField({
          name: 'colors',
          title: 'Colors',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
      group: ['info', 'taxonomy'],
    }),
    // growth
    defineField({
      name: 'growth',
      title: 'Growth',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'sowing',
          title: 'Sowing Instructions',
          type: 'portableText',
        }),
        defineField({
          name: 'growthPeriod',
          title: 'Growth Period',
          type: 'array',
          of: [{ type: 'string', options: { list: getLocaleMonthsOptionsList('en') } }],
        }),
        defineField({
          name: 'bloomingPeriod',
          title: 'Blooming Period',
          type: 'array',
          of: [{ type: 'string', options: { list: getLocaleMonthsOptionsList('en') } }],
        }),
        defineField({
          name: 'fruitPeriod',
          title: 'Fruit Period',
          type: 'array',
          of: [{ type: 'string', options: { list: getLocaleMonthsOptionsList('en') } }],
        }),
        defineField({
          name: 'phRange',
          title: 'pH Range',
          type: 'object',
          fields: [
            defineField({
              name: 'min',
              title: 'Minimum',
              type: 'number',
            }),
            defineField({
              name: 'max',
              title: 'Maximum',
              type: 'number',
            }),
          ],
        }),
        defineField({
          name: 'light',
          title: 'Light',
          type: 'number',
        }),
        defineField({
          name: 'humidity',
          title: 'Humidity',
          type: 'number',
        }),
        defineField({
          name: 'spread',
          title: 'Spread',
          type: 'object',
          fields: [
            defineField({
              name: 'min',
              title: 'Minimum',
              type: 'number',
            }),
            defineField({
              name: 'max',
              title: 'Maximum',
              type: 'number',
            }),
          ],
        }),
        defineField({
          name: 'rootDepth',
          title: 'Average Root Depth',
          type: 'object',
          fields: [
            defineField({
              name: 'min',
              title: 'Minimum',
              type: 'number',
            }),
            defineField({
              name: 'max',
              title: 'Maximum',
              type: 'number',
            }),
          ],
        }),
        defineField({
          name: 'temperatureRange',
          title: 'Temperature Range',
          type: 'object',
          fields: [
            defineField({
              name: 'min',
              title: 'Minimum',
              type: 'number',
            }),
            defineField({
              name: 'max',
              title: 'Maximum',
              type: 'number',
            }),
          ],
        }),
        defineField({
          name: 'soilConditions',
          title: 'Soil Conditions',
          type: 'object',
          fields: [
            defineField({
              name: 'nutrients',
              title: 'Nutrients',
              type: 'string',
              options: {
                list: ['low', 'medium', 'high'],
              },
            }),
            defineField({
              name: 'texture',
              title: 'Texture',
              type: 'string',
              options: {
                list: ['clay', 'silty', 'peaty', 'sandy', 'loamy', 'chalky'],
              },
            }),
            defineField({
              name: 'humidity',
              title: 'Humidity',
              type: 'string',
              options: {
                list: ['dry', 'moist', 'wet', 'well-drained', 'aquatic'],
              },
            }),
            defineField({
              name: 'salinity',
              title: 'Salinity',
              type: 'string',
            }),
          ],
        }),
      ],
      group: ['info', 'growth'],
    }),

    // specification
    defineField({
      name: 'specification',
      title: 'Specification',
      type: 'object',
      fields: [
        defineField({
          name: 'ligneousType',
          title: 'Ligneous Type',
          type: 'string',
          options: {
            list: ['tree', 'shrub', 'subshrub', 'liana', 'parasite'],
          },
        }),
        defineField({
          name: 'growthForm',
          title: 'Growth Form',
          type: 'string',
        }),
        defineField({
          name: 'growthHabit',
          title: 'Growth Habit',
          type: 'string',
        }),
        defineField({
          name: 'growthRate',
          title: 'Growth Rate',
          type: 'string',
        }),
        defineField({
          name: 'averageHeight',
          title: 'Average Height',
          type: 'number',
        }),
        defineField({
          name: 'maximumHeight',
          title: 'Maximum Height',
          type: 'number',
        }),
        defineField({
          name: 'nitrogenFixation',
          title: 'Nitrogen Fixation',
          type: 'boolean',
        }),
        defineField({
          name: 'shapeAndOrientation',
          title: 'Shape and Orientation',
          type: 'string',
        }),
        defineField({
          name: 'toxicity',
          title: 'Toxicity',
          type: 'string',
          options: {
            list: ['none', 'low', 'medium', 'high'],
          },
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
      group: ['info', 'taxonomy'],
    }),

    // TODO: add types and uncomment fields
    // // family reference
    //     defineField({
    //   name: 'family',
    //   title: 'Family',
    //   type: 'reference',
    //   to: [{ type: 'family' }],
    //   group: ['info', 'taxonomy'],
    // }),
    // // genus reference
    //     defineField({
    //   name: 'genus',
    //   title: 'Genus',
    //   type: 'reference',
    //   to: [{ type: 'genus' }],
    //   group: ['info', 'taxonomy'],
    // }),
    // // species reference
    //     defineField({
    //   name: 'species',
    //   title: 'Species',
    //   type: 'reference',
    //   to: [{ type: 'species' }],
    //   group: ['info', 'taxonomy'],
    // }),

    // distributions references
    // defineField({
    //   name: 'distributions',
    //   title: 'Distributions',
    //  type: 'array',
    // TODO: figure out which data to use
    //   of: [{ type: 'reference', to: [{ type: 'distribution' }] }],
    //   group: ['info', 'taxonomy'],
    // }),

    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
      hidden: false,
    }),
  ],
  groups: [
    {
      title: 'Info',
      name: 'info',
      default: true,
    },
    {
      title: 'Images',
      name: 'images',
    },
    {
      title: 'Specs',
      name: 'taxonomy',
    },
    {
      title: 'Growth',
      name: 'growth',
    },
  ],
  preview: {
    select: {
      title: 'commonName.de.value',
      subtitle: 'botanicalName',
      media: 'mainImage',
    },
  },
})
