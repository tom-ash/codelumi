export function componentDidUpdate() {
  const files = [...this.props.files]
  if (files.length > 0 && !this.props.addingPicture) this.addPicture(files)
}
