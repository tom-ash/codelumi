import { buildUrl } from '../../../../../../../../shared/functions/builders/url'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'

export function edit(props) {
  const { editPath } = props
  const href = buildUrl({ path: editPath })

  changeUrl({ href })
}
