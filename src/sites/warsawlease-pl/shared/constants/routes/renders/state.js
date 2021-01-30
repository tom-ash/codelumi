import * as tracks from '../../tracks/tracks'

const renderState = Object.assign(
  {},
  ...Object.values(tracks).map(track => ({ [track]: false }))
)

export default renderState
