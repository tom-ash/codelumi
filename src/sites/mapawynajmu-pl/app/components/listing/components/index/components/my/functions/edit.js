import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'

export function edit(props) {
  const { editHref: href } = props

  changeUrl({ href })
}
