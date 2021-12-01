export function edit(props) {
  const { editPath } = props
  const { changeRoute } = this.context

  changeRoute({ href: editPath })
}
