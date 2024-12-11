import gardenDocument from './documents/garden.document'
import gardenSectionDocument from './documents/gardenSection.document'
import plantDocument from './documents/plant.document'
import colorObject from './objects/color.object'
import plantImageObject from './objects/plantImage.object'
import portableTextObject from './objects/portableText.object'

export const schemaTypes = [
  // documents
  plantDocument,
  gardenDocument,
  gardenSectionDocument,

  // objects
  portableTextObject,
  colorObject,
  plantImageObject,
]
