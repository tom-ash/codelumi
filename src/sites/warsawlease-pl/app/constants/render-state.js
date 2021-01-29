import * as tracks from '../../shared/constants/tracks/tracks'

export const renderState = Object.assign(
  {},
  ...Object.values(tracks).map(track => ({ [track]: false }))
)
