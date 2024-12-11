import { assist } from '@sanity/assist'
import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { imageHotspotArrayPlugin } from 'sanity-plugin-hotspot-array'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Garden',

  projectId: 'awkc2qlt',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    assist(),
    colorInput(),
    imageHotspotArrayPlugin(),
    /*     googleMapsInput({
      // TODO:  make env var import work
      // TODO: Add billing details in google cloud account
      apiKey: googleApiKey,
    }), */

    internationalizedArray({
      languages: [
        { id: 'en', title: 'English' },
        { id: 'de', title: 'Deutsch' },
        { id: 'fr', title: 'French' },
      ],
      defaultLanguages: ['de'],
      fieldTypes: ['string'],
    }),

    // * * Studio localisation bundles * *
    // deDELocale(),
    // frFRLocale(),
  ],

  schema: {
    types: schemaTypes,
  },

  /*   i18n: {
    bundles: localisationOverrides,
  }, */
})
