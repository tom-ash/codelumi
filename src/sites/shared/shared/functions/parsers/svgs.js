function svgsParser({ svgs: unparsedSvgs }) {
  const svgs = {}

  unparsedSvgs.map(unparsedSvg => {
    svgs[unparsedSvg.name] = unparsedSvg.path_data || unparsedSvg.pathData
  })

  return svgs
}

export default svgsParser
