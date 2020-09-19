export function parseScalableVectorGraphics(json) {
  const scalableVectorGraphics = {}
  json.map(svg => {
    scalableVectorGraphics[svg.name] = svg.path_data || svg.pathData
  })

  return scalableVectorGraphics
}
