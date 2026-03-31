export function buildMapsEmbedSrc(query: string): string {
  const q = encodeURIComponent(query)
  return `https://maps.google.com/maps?q=${q}&hl=pt&z=16&output=embed`
}
