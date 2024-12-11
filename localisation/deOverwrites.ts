import { defineLocaleResourceBundle } from 'sanity'

const deOverwrites = defineLocaleResourceBundle({
  // make sure the `locale` language code corresponds to the one you want to override
  locale: 'de-DE',
  namespace: 'structure',
  resources: {
    /*     'document-inspector.menu-item.title': 'Inspiser',
    'document-inspector.dialog.title': 'Inspiserer <DocumentTitle/>', */
  },
})
