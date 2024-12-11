import { Box } from '@sanity/ui'
import { ComponentType } from 'react'
import { ReferenceValue, useSchema } from 'sanity'
import { HotspotTooltipProps } from 'sanity-plugin-hotspot-array'

const PlantSpotPreview: ComponentType<HotspotTooltipProps> = ({ value, renderPreview }) => {
  const itemValue = value.plant as ReferenceValue | undefined
  const plantSchema = useSchema().get('plant')
  return (
    <Box padding={2} style={{ minWidth: 200 }}>
      {itemValue?._ref
        ? renderPreview({
            value,
            schemaType: plantSchema!,
            layout: 'default',
          })
        : `No plant selected`}
    </Box>
  )
}
export default PlantSpotPreview
