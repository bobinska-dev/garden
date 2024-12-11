import { defineLocaleResourceBundle } from 'sanity'

const frOverrides = defineLocaleResourceBundle({
  // make sure the `locale` language code corresponds to the one you want to override
  locale: 'fr-FR',
  namespace: 'structure',
  resources: {
    /* 'document-inspector.menu-item.title': 'Inspiser',
    'document-inspector.dialog.title': 'Inspiserer <DocumentTitle/>', */
  },
})
