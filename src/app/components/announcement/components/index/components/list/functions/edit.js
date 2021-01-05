import { ANNOUNCEMENT_EDIT_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'

export function edit({
  id
}) {
  const { changeCreateData } = this.props

  changeCreateData({ id })
  this.changeRoute(ANNOUNCEMENT_EDIT_TRACK)
}
