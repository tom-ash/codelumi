import * as tracks from '../../tracks/tracks'

export const renderState = Object.assign(
  {},
  ...Object.values(tracks).map(track => ({ [track]: false }))
)
