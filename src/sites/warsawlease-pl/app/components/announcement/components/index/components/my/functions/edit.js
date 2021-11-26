export function edit(props) {
  const { editUrl } = props
  const { changeRoute } = this.context

  changeRoute({ href: editUrl })
}
