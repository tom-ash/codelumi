import * as tracks from '../../shared/constants/tracks/tracks'

const renderState = Object.assign(
  {},
  ...Object.values(tracks).map(track => ({ [track]: false }))
)

export default renderState
