function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

export const googleApiKey = assertValue(
  process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY,
  'Missing SANITY_STUDIO_GOOGLE_MAPS_API_KEY',
)
