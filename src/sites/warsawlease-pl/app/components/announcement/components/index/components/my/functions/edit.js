export function edit(props) {
  const { editUrl, editTitle } = props
  const { changeRoute } = this.context

  changeRoute({ href: editUrl })
}
