function threeTilesDimensionCounter() {
  const container = 1134
  const tile = 346
  let margin = (container - 3*tile) / 8
  let fullContainer = tile + margin * 2
  console.dir(margin)
  console.dir(fullContainer)
}

function twoTilesDimensionCounter() {
  const container = 960
  const tile = 408
  let margin = (container - 2 * tile) / 6
  console.dir(margin)
}