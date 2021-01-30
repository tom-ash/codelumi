function svgsParser({ svgs }) {
  const scalableVectorGraphics = {}

  svgs.map(svg => {
    scalableVectorGraphics[svg.name] = svg.path_data || svg.pathData
  })

  return scalableVectorGraphics
}

export default svgsParser
