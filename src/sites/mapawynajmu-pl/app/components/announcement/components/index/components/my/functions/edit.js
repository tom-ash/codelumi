import buildUrl from '../../../../../../../../shared/functions/builders/url'

export function edit(props) {
  const { editPath } = props
  const { changeRoute } = this.context
  const href = buildUrl({ path: editPath })

  changeRoute({ href })
}
